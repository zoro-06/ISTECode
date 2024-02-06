import React from 'react';




import Yesterdays_2 from '../Date/Yesterdays_2';

import Link from "next/link";
import { problems } from '@/mockProblems/problems';

type QotwbelowpageProps = {
  problem:{
    id: string;
    title: string;
    difficulty: string;
    category: string;
    order: number;
    videoId: string;
  };
    
};




const Qotwbelowpage:React.FC<QotwbelowpageProps> = ({problem}) => {

        return  (
      
                <div className='text white'>
                  
                <div className='custom_third' key={`${problem.id}`}>
        
                
                
                
                <div className='custom_1 bg-gradient-to-b from-purple-700 to-black text-white px-20 py-10 sm:px-4 bg-dark-gray-1 to-black rounded-md text-white'> 
                
                <Yesterdays_2/>
                <div className="hover:text-blue-600 cursor pointer absolute text-center text-lg ml-20" >
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