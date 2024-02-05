import React,{ useState,useEffect}from 'react';

type BackwardTimerProps = {
    
};

const BackwardTimer=({ duration })=>{
    const[time,setTime]=useState(duration);
    useEffect(() =>{
        setTimeout(() =>{
            setTime(time-1000);

        },1000)
    },[time]);

    const getFormattedTime = (milliseconds) => {
        let total_seconds= parseInt(Math.floor(milliseconds/1000).toString());
        let total_minutes= parseInt(Math.floor( total_seconds/60).toString());
        let total_hours= parseInt(Math.floor( total_minutes /60).toString());
        let days= parseInt(Math.floor(total_hours/24).toString());
        let seconds=parseInt((total_seconds % 60).toString());
        let minutes=parseInt((total_minutes % 60).toString());
        let hours=parseInt((total_hours % 24).toString());
    
        
        return `${days}:${hours}:${minutes}:${seconds}`;
    };

    
    return <div>{getFormattedTime(time)}</div>
    
    };

export default BackwardTimer;