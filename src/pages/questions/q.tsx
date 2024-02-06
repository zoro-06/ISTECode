import React from 'react';
import Topbar from '@/components/Topbar/Topbar';
import MyCalendar from '@/components/Calendar/MyCalendar';
import QOTW from '@/components/QOTW/QOTW';
import QOTWpage from '@/components/QOTW/QOTWpage';
import QOTWpage2 from '@/components/QOTW/QOTWpage2';
import { problems } from '@/mockProblems/problems';
import Qotwbelowpage from '@/components/Qotwbelowpage/Qotwbelowpage';
import Qotwbelowpage_2 from '@/components/Qotwbelowpage/Qotwbelowpage_2';

type Problem = {
    id: string;
    title: string;
    difficulty: string;
    category: string;
    order: number;
    videoId: string;
};

type ProblemPageProps = {
    problem: Problem;
};

const ProblemPage: React.FC = () => {
    const defaultVideoId: '8-k1C6ehKuw' = '8-k1C6ehKuw';

    return (
        <div>
            <Topbar />
            <MyCalendar />
            <QOTW problem={{ ...problems[0], videoId: problems[0].videoId || defaultVideoId }} />
            <Qotwbelowpage problem={{ ...problems[1], videoId: problems[1].videoId || defaultVideoId }} />
            <Qotwbelowpage_2 problem={{ ...problems[2], videoId: problems[2].videoId || defaultVideoId }} />
            
            
        </div>
    );
};

export default ProblemPage;
