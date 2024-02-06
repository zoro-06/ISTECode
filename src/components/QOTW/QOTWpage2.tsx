import React from 'react';
import Topbar from '@/components/Topbar/Topbar';
import MyCalendar from '@/components/Calendar/MyCalendar';
import Qotwbelowpage_2 from '@/components/Qotwbelowpage/Qotwbelowpage_2';
import { problems } from '@/mockProblems/problems';

type ExpectedProblemType = {
    id: "reverse-linked-list";
    title: "Reverse Linked List";
    difficulty: "Hard";
    category: "Linked List";
    order: 2;
    videoId: "";
};

type Qotwbelowpage2ProblemType = {
    id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId: string;
};

type ProblemPageProps = {
    problem: ExpectedProblemType;
};

const ProblemPage: React.FC = () => {
    const expectedProblem: ExpectedProblemType = {
        id: "reverse-linked-list",
        title: "Reverse Linked List",
        difficulty: "Hard",
        category: "Linked List",
        order: 2,
        videoId: "",
    };

    return (
        <div>
           
            <Qotwbelowpage_2 problem={expectedProblem as Qotwbelowpage2ProblemType} />
        </div>
    );
};

export default ProblemPage;
