import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { firestore } from "@/firebase/firebase";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";


const useStyles = makeStyles(() => ({
    root: {
        width: "90%",
        maxWidth: 460,
        backgroundColor: "purple",
        margin: "20px 20px 10px 20px",
        
        padding: 20,
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
}));

const Leaderboard: React.FC = () => {
 const classes = useStyles();
const [users, setUsers] = useState<any[]>([]);

 useEffect(() => {
const fetchUsers = async () => {
 const usersRef = collection(firestore, "users");
 const q = query(usersRef, orderBy("solvedProblems", "desc"), limit(20));
 const querySnapshot = await getDocs(q);
const fetchedUsers = querySnapshot.docs.map((doc) => ({
id: doc.id,
...doc.data(),
 }));
setUsers(fetchedUsers);
 };
 fetchUsers();
 }, []);

return (
<div className={classes.root}>
<Typography  variant="h4"  gutterBottom>
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
 {users.map((user, index) => (
 <TableRow key={user.id}>
<TableCell>{index + 1}</TableCell>
<TableCell>{user.displayName}</TableCell>
<TableCell>{user.solvedProblems.length}</TableCell>
 </TableRow>
))}
</TableBody>
</Table>
</div>
 );
};

export default Leaderboard;
