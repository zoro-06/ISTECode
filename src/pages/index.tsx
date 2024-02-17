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
                <h1 className='text-2xl text-center text-white dark:text-gray-400 font-medium uppercase mt-10 mb-5'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Code  Create Inspire !').start();
                        }}
                    />
                </h1>
                <div className='relative overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 pb-10'>
                    {loadingProblems && (
                        <div className='max-w-full mx-auto animate-pulse'>
                            {[...Array(10)].map((_, idx) => (
                                <LoadingSkeleton key={idx} />
                            ))}
                        </div>
                    )}
                    <table className='text-sm text-left text-gray-500 dark:text-gray-400 w-full max-w-full mx-auto'>
                        {!loadingProblems && (
                            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b'>
                                <tr>
                                    <th scope='col' className='px-2 sm:px-6 py-3 font-medium'>
                                        Status
                                    </th>
                                    <th scope='col' className='px-2 sm:px-6 py-3 font-medium'>
                                        Title
                                    </th>
                                    <th scope='col' className='px-2 sm:px-6 py-3 font-medium'>
                                        Difficulty
                                    </th>
                                    <th scope='col' className='px-2 sm:px-6 py-3 font-medium'>
                                        Category
                                    </th>
                                    <th scope='col' className='px-2 sm:px-6 py-3 font-medium'>
                                        Solution
                                    </th>
                                </tr>
                            </thead>
                        )}
                        <ProblemsTable setLoadingProblems={setLoadingProblems} />
                    </table>
                </div>
            </main>
        </>
    );
}

const LoadingSkeleton = () => {
    return (
        <div className='flex items-center space-x-4 mt-4 px-2 sm:px-6'>
            <div className='w-6 h-6 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 w-52 sm:w-96 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 w-52 sm:w-96 rounded-full bg-dark-layer-1'></div>
            <div className='h-4 w-52 sm:w-96 rounded-full bg-dark-layer-1'></div>
            <span className='sr-only'>Loading...</span>
        </div>
    );
};
