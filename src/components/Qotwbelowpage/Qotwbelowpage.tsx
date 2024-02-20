import React from 'react';
import QOTW from'@/components/QOTW/QOTW';
import Date from '../Date/Date';
import YesterdaysDate from '../Date/YesterdaysDate';

import Link from "next/link";
import { problems } from '@/mockProblems/problems';

type QotwbelowpageProps = {
  problem:{
    id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
  };
    
};




const Qotwbelowpage:React.FC<QotwbelowpageProps> = ({problem}) => {

        return  (
      
                <div className='text white'>
                
                <div className='custom_second' key={`${problem.id}`}>
        
                
                
                
                <div className='custom_1 bg-gradient-to-b from-purple-700 to-black text-white px-20 py-10 sm:px-4 bg-dark-gray-1 to-black rounded-md text-white'> 
                <YesterdaysDate/>
                <div className="titlename hover:text-blue-600 cursor pointer absolute text-center text-lg ml-20" >
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
                </div>
                    
                </div>
        );
                    }
                    
    
   
export default Qotwbelowpage;