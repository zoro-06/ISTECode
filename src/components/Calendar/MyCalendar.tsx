import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import ButtonProp from './ButtonProp';

const MyCalendar: React.FC = () => {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    const isHovered = hoveredDate && hoveredDate.toISOString() === date.toISOString();

    return (
      <div
        style={{
          position: 'absolute',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHoveredDate(date)}
        onMouseLeave={() => setHoveredDate(date)}
      >
        <div className='bg-brand-purple' style={{position:'absolute',
                                       borderRadius:'90%',
                                       backgroundColor:'transparent',
                                       left:'2px',
                                       top:'2px',}}>  <p className="transparent-text">.</p></div>

        {isHovered && (
          <div className='buttonHover'>
            <div className='buttonHover_2'>
              <ButtonProp />
                           
            <button className='buttonStyleHover bg-brand-purple text-white  rounded-md text-sm font-medium
                hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
                transition duration-300 ease-in-out ' >Solve Problem</button>
          
          </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Calendar
      tileContent={tileContent}
      // Add other necessary props for your calendar library
    />
  );
};

export default MyCalendar;
