import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";
import Typewriter from 'typewriter-effect';
import { useState } from "react";

export default function Home() {
    const [loadingProblems, setLoadingProblems] = useState(true);
    const hasMounted = useHasMounted();

    if (!hasMounted) return null;

    return (
        <>
            <main className='bg-dark-layer-2 min-h-screen'>
                <Topbar />
                <div className='px-4 sm:px-6 lg:px-8 py-10'>
                    <h1 className='text-2xl text-center text-white dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Code  Create Inspire !')
                                    .start();
                            }}
                        />
                    </h1>
                    <div className='overflow-x-auto'>
                        {loadingProblems && (
                            <div className='max-w-md mx-auto animate-pulse'>
                                {[...Array(10)].map((_, idx) => (
                                    <LoadingSkeleton key={idx} />
                                ))}
                            </div>
                        )}
                        {!loadingProblems && (
                            <ProblemsTable setLoadingProblems={setLoadingProblems} />
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}

const LoadingSkeleton = () => {
    return (
        <div className='flex items-center space-x-4 mt-4'>
            <div className='w-6 h-6 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 w-52 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 w-52 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 w-52 rounded-full bg-dark-layer-1'></div>
            <span className='sr-only'>Loading...</span>
        </div>
    );
};
