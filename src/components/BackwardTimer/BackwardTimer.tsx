import React, { useState, useEffect } from 'react';

const MidnightTimer = () => {
    const [time, setTime] = useState(0); // Initial state set to 0

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeUntilMidnight = getTimeUntilMidnight();
            setTime(timeUntilMidnight);
        }, 1000);

        return () => clearInterval(intervalId); // Clear the interval on unmount
    }, []);

    function getTimeUntilMidnight() {
        const now = new Date();
        const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0); // Calculate midnight of the next day
        return midnight.getTime() - now.getTime(); // Calculate time until midnight
    }

    function getFormattedTime(milliseconds: number) {
        let total_seconds = Math.floor(milliseconds / 1000);
        let total_minutes = Math.floor(total_seconds / 60);
        let total_hours = Math.floor(total_minutes / 60);
        let days = Math.floor(total_hours / 24);
        let seconds = total_seconds % 60;
        let minutes = total_minutes % 60;
        let hours = total_hours % 24;

        return `${hours}:${minutes}:${seconds}`;
    }

    return <div>{getFormattedTime(time)}</div>;
};

export default MidnightTimer;
