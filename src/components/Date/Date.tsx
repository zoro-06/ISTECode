import React from 'react';

function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString('en-US', {
    month: 'long',
  });
}

const Datetime = () => {
  var showdate = new Date();
  const inputStyle: React.CSSProperties = {
    width: '95px', 

    background: 'transparent', 
    position: 'absolute',
    top: '-1px',
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