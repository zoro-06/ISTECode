import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState);
    const [user, loading, error] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (user) router.push("/");
        if (!loading && !user) setPageLoading(false);
    }, [user, router, loading]);

    if (pageLoading) return null;

    return (
        <div className='bg-gradient-to-b from-purple-500 to-black min-h-screen'>
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <img src="1iste.png" alt="Description of the GIF" width={300} height={300} className='mb-8' />
                    <Image src='/3iste.png' alt='logo img' width={200} height={200} className='mb-8' />
                </div>
            </div>
            {authModal.isOpen && <AuthModal />}
        </div>
    );
};
export default AuthPage;
