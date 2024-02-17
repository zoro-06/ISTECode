import { auth } from "@/firebase/firebase";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Logout from "../Buttons/Logout";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Timer from "../Timer/Timer";
import { useRouter } from "next/router";
import { problems } from "@/utils/problems";
import { Problem } from "@/utils/types/problem";

type TopbarProps = {
    problemPage?: boolean;
};

const Topbar: React.FC<TopbarProps> = ({ problemPage }) => {
    const [user] = useAuthState(auth);
    const setAuthModalState = useSetRecoilState(authModalState);
    const router = useRouter();

    const handleProblemChange = (isForward: boolean) => {
        const { order } = problems[router.query.pid as string] as Problem;
        const direction = isForward ? 1 : -1;
        const nextProblemOrder = order + direction;
        const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

        if (isForward && !nextProblemKey) {
            const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
            router.push(`/problems/${firstProblemKey}`);
        } else if (!isForward && !nextProblemKey) {
            const lastProblemKey = Object.keys(problems).find(
                (key) => problems[key].order === Object.keys(problems).length
            );
            router.push(`/problems/${lastProblemKey}`);
        } else {
            router.push(`/problems/${nextProblemKey}`);
        }
    };

    return (
        <nav className='relative flex h-[70px] w-full shrink-0 items-center px-2 sm:px-5 bg-gradient-to-b from-purple-700 to-black text-dark-purple-7'>
            <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
                <Link href='/' className='h-[25px] flex items-center'>
                    <Image src='/1iste.png' alt='Logo' height={100} width={80} />
                    <Image src='/3iste.png' alt='logo img' width={150} height={80} />
                </Link>

                {problemPage && (
                    <div className='flex items-center gap-2 justify-center'>
                        <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'>
                            <FaChevronLeft />
                        </div>
                        <Link href='/' className='flex items-center gap-2 font-medium text-dark-gray-8 cursor-pointer'>
                            <div>
                                <BsList />
                            </div>
                            <p>Problem List</p>
                        </Link>
                        <div className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'>
                            <FaChevronRight />
                        </div>
                    </div>
                )}

                <div className='flex items-center space-x-2 flex-1 justify-end'>
                    <a
                        href='https://echo-sync.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                        className='btn btn-brand-purple'
                    >
                        MEET
                    </a>
                    {!user && (
                        <button
                            onClick={() =>
                                setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))
                            }
                            className='btn btn-brand-purple'
                        >
                            Log In
                        </button>
                    )}
                    {user && (
                        <button
                            onClick={() =>
                                setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))
                            }
                            className='btn btn-brand-purple'
                        >
                            Q.O.T.D
                        </button>
                    )}
                    {user && problemPage && <Timer />}
                    {user && (
                        <div className='relative group'>
                            <Image src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
                            <div className='absolute top-10 left-2/4 -translate-x-2/4 mx-auto bg-dark-gray-7 text-black p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300'>
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        </div>
                    )}
                    {user && <Logout />}
                </div>
            </div>
        </nav>
    );
};
export default Topbar;
