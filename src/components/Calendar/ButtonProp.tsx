import React from 'react';
import Link from 'next/link';

type ButtonPropProps = {
    problem:{
        id: "two-sum",
            title: "Two Sum",
            difficulty: "Easy",
            category: "Array",
            order: 1,
            videoId: "8-k1C6ehKuw",
      };
    
};

const ButtonProp:React.FC<ButtonPropProps> = ({problem}) => {
    
    return (
        <div className='text white'>
          
        <div key={`${problem.id}`}>
        
        <div >

        <button className='buttonName bg-brand-purple text-white  rounded-md text-sm font-medium' >
          {problem.title}
        </button>
     <button className='buttonStyleHover bg-brand-purple text-white  rounded-md text-sm font-medium
                hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
                transition duration-300 ease-in-out ' >
                    <Link  href={`/problems/${problem.id}`}>
                        Solve Problem
                        </Link>
                </button>
                <div className='difficultyStyle text-white m-12 ml-5 '>
         {problem.difficulty}
         </div>
                </div>
                </div>
                </div>
                )
}
export default ButtonProp;