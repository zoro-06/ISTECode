import React from 'react';
import Date from '../Date/Date';

type ButtonPropProps = {
    
};

const ButtonProp:React.FC<ButtonPropProps> = () => {
    
    return <div> <Date   />
     <button className='buttonStyleHover bg-brand-purple text-white  rounded-md text-sm font-medium
                hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
                transition duration-300 ease-in-out ' >Solve Problem
                </button></div>
}
export default ButtonProp;