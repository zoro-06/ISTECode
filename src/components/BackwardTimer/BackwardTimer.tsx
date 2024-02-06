import React, { useState, useEffect } from 'react';

type BackwardTimerProps = {
    duration: number; 
};

const BackwardTimer = ({ duration }: BackwardTimerProps) => {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTime(time - 1000);
        }, 1000);

        return () => clearTimeout(timer); // Clear the timer on unmount
    }, [time]);

    const getFormattedTime = (milliseconds: number) => {
        let total_seconds = Math.floor(milliseconds / 1000);
        let total_minutes = Math.floor(total_seconds / 60);
        let total_hours = Math.floor(total_minutes / 60);
        let days = Math.floor(total_hours / 24);
        let seconds = total_seconds % 60;
        let minutes = total_minutes % 60;
        let hours = total_hours % 24;

        return `${days}:${hours}:${minutes}:${seconds}`;
    };

    return <div>{getFormattedTime(time)}</div>;
};

export default BackwardTimer;