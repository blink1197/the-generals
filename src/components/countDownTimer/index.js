import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ startingTime, pauseTimer }) => {
    const [timeRemaining, setTimeRemaining] = useState(startingTime * 60);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        setIsPaused(pauseTimer);
    }, [pauseTimer]);

    useEffect(() => {
        let timer;
        if (!isPaused && timeRemaining > 0) {
            timer = setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1);
            }, 1000);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isPaused, timeRemaining]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const togglePause = () => {
        setIsPaused(prevPaused => !prevPaused);
    };

    const timerStyle = (time) => {
        if (time <= 60 && time % 2 === 1 || time <= 10) {
            return "text-red-400";
        } else {
            return "";
        }
    };

    return (
        <div className='flex'>
            <span className={`w-[70px] m-3 text-2xl font-bold ${timerStyle(timeRemaining)}`}>{formatTime(timeRemaining)}</span>
        </div>
    );
};

export default CountdownTimer;