import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import ButtonProp from './ButtonProp';
import { problems } from '@/mockProblems/problems';

const MyCalendar: React.FC = () => {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const todayDate=new Date();

  const dateProblemMap: { [key: string]: number } = {};

  const getProblemIdForDate = (date: Date): number => {
    const dateString = date.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format
    if (!(dateString in dateProblemMap)) {
      // Assign a problem ID based on the day of the month
      dateProblemMap[dateString] = date.getDate() % problems.length;
    }
    return dateProblemMap[dateString];
  };


  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    const isHovered = hoveredDate && hoveredDate.toISOString() === date.toISOString();
    const shouldHover=date<=todayDate;
    const problemId = getProblemIdForDate(date);


    


    return (
      <div
        style={{
          position: 'absolute',
          cursor: shouldHover ? 'pointer' : 'default',

        }}
        onMouseEnter={() => setHoveredDate(date)}
        onMouseLeave={() => setHoveredDate(null)}
      >
        <div className='calendarStyle bg-brand-purple' >  <p className="transparent-text">.</p></div>

        {isHovered && shouldHover && (
          <div className='buttonHover'>
            <div className='buttonHover_2'>
              <ButtonProp problem={problems[problemId]}/>
                           
      
          
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
