
import React from 'react';

function getMonthName(monthNumber:number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

const Datetime = () => {
  var showdate = new Date();
  showdate.setDate(showdate.getDate()-1);

 
    const inputStyle: React.CSSProperties = {
    width: '85px', 

    background: 'transparent', 
    position:'absolute',
    top:'-1px',
    };

  var displaytodaysdate =
    showdate.getDate() + ' ' + getMonthName(showdate.getMonth() + 1); 

  return (
    <div className='text-black'>
      <input style={inputStyle} value={displaytodaysdate} />
    </div>
  );
};

export default Datetime;

