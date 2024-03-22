import React from 'react';
import Split from 'react-split';
import Topbar from "@/components/Topbar/Topbar";
import Timer from "../Timer/Timer";
import BackwardTimer from '../BackwardTimer/BackwardTimer';
import Date from '../Date/Date';
import ProblemDescription from '../Workspace/ProblemDescription/ProblemDescription';
import { Problem } from "@/utils/types/problem";
import Link from "next/link";
import { problems } from '@/mockProblems/problems';


type QOTWProps = {

  
  problem: {
    id: string;
    title: string;
    difficulty: string;
    category: string;
    order: number;
    videoId?: string;
  };
  };
    

 

const QOTW:React.FC<QOTWProps> = ({problem}) => {
    
    
    return  (
      
        <div className='text white '>


<div className="efficient">
            <div className="quote bg-purple-700 hover:bg-gray-600 hover:text-black text-center">
                How to Code Efficiently?
            </div>
          </div>
            <div className="quote bg-gray-500  hover:bg-orange-900">
                Plan Before You Code
            </div>
            <div className="quote bg-gray-400  hover:bg-purple-900">
                Write Clean and Readable Code
            </div>
            <div className="quote bg-gray-300  hover:bg-orange-900">
              Test and Debug Regularly
            </div>
            <div className="quote bg-gray-200  hover:bg-purple-900">
                Stay Organized and Documented
            </div>
          
        <div className='custom' key={`${problem.id}`}>

        
        <BackwardTimer 
       
          />
        
        <div className='custom_1 bg-gradient-to-b from-purple-700 to-black text-white px-20 py-10 sm:px-4 bg-dark-gray-1 to-black rounded-md text-white'> 
        <Date/>
        <div className='titlename hover:text-blue-600 cursor pointer absolute text-center text-lg ml-20' >
          {problem.title}
        </div>
        <button className ='buttonStyle bg-brand-purple text-white  position:absolute top:100px  px-100 py-3 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
                transition duration-300 ease-in-out type:_blank' >
                  
                  <Link  href={`/problems/${problem.id}`}>

        Solve Problem
        </Link>
        </button>
        <div className='diffStyle'>
         {problem.difficulty}
          </div>
        </div>
        <span className="jt__text">Prior Questions</span>

        </div>
    
        </div>
            
    
    );
}
export default QOTW;
