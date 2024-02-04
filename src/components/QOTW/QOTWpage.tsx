import React from 'react';
import Split from 'react-split';
import Topbar from "@/components/Topbar/Topbar";
import Timer from "../Timer/Timer";
import BackwardTimer from '../BackwardTimer/BackwardTimer';
import Date from '../Date/Date';
import ProblemDescription from '../Workspace/ProblemDescription/ProblemDescription';
import { Problem } from "@/utils/types/problem";

type QOTWpageProps = {
    
};

const QOTWpage:React.FC<QOTWpageProps> = () => {
    
    return <div><div className='bg-gradient-to-b from-purple-700 to-black text-white px-20 py-10 sm:px-4 bg-dark-gray-1 to-black rounded-md text-white'> 
    <Date />
    
    <button className ='bg-brand-purple text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
            hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
            transition duration-300 ease-in-out type:_blank'  style={buttonStyle} > 
    Solve Problem
    </button>
    </div>
    </div>
}
export default QOTWpage;