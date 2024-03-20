import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { firestore, auth } from "@/firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Button } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles(() => ({
    root: {
        width: "90%",
        maxWidth: 460,
        backgroundColor: "purple",
        margin: "20px",
        padding: "20px 20px 40px 20px", 
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
}));

const Leaderboard: React.FC = () => {
    const classes = useStyles();
    const [users, setUsers] = useState<any[]>([]);
    const [showAllUsers, setShowAllUsers] = useState(false);
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [userRank, setUserRank] = useState<number | null>(null);
    const [currentUserDisplayName, setCurrentUserDisplayName] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersRef = collection(firestore, "users");
                const q = query(usersRef, orderBy("solvedProblems", "desc"));
                const querySnapshot = await getDocs(q);
                const fetchedUsers = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(fetchedUsers);

                if (currentUser) {
                    const currentUserData = fetchedUsers.find(user => user.id === currentUser.uid);
                    if (currentUserData) {
                        setUserRank(fetchedUsers.indexOf(currentUserData) + 1);
                        setCurrentUserDisplayName(currentUserData.displayName);
                    }
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();

        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, [currentUser]);

    const handleShowAllUsers = () => {
        setShowAllUsers(true);
    };

    return (
        <div className="flex flex-wrap justify-center">
            <div className={classes.root}>
                <Typography variant="h4" gutterBottom>
                    Leaderboard
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(0, showAllUsers ? users.length : 10).map((user, index) => (
                            <TableRow key={user.id}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{user.displayName}</TableCell>
                                <TableCell>{user.solvedProblems.length}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {!showAllUsers && (
                    <Button variant="contained" color="primary" onClick={handleShowAllUsers}>
                        Show All
                    </Button>
                )}
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-1/4 m-20">
                {currentUser && (
                    <>
                        <Typography variant="h5" gutterBottom className="text-center mb-4">
                            Your Profile:
                        </Typography>
                        <div className="flex items-center justify-center mb-4">
                            <Image src={currentUser.photoURL || "/avatar.png"} alt="Avatar" width={200} height={200} className="rounded-full" />
                        </div>
                        <Typography variant="body1" className="text-center mb-2">
                            Username: {currentUserDisplayName || "N/A"}
                        </Typography>
                        <Typography variant="body1" className="text-center mb-2">
                            Email: {currentUser.email || "N/A"}
                        </Typography>
                        <Typography variant="body1" className="text-center">
                            Your Rank: {userRank !== null ? userRank : "Not ranked"}
                        </Typography>
                    </>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;
