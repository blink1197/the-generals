import React, { useState, useEffect } from 'react';

const CountdownTimer = ({
    startingTime,
    pauseTimer,
    submitInitialBoardState,
    color,
    matchStatus,
    player,
    isPlayerTurn,
    remainingTime
}) => {
    const [timeRemaining, setTimeRemaining] = useState(startingTime * 60);
    const [isPaused, setIsPaused] = useState(false);


    useEffect(() => {
        if (matchStatus === 'gameProper') setTimeRemaining(remainingTime);
    }, [remainingTime]);

    useEffect(() => {
        setIsPaused(pauseTimer);
    }, [pauseTimer]);

    useEffect(() => {
        let timer;
        if (!isPaused && timeRemaining > 0) {
            timer = setTimeout(() => {
                setTimeRemaining(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            console.log('here')
            submitInitialBoardState();
        }
        return () => {
            clearTimeout(timer);
        };
    }, [isPaused, timeRemaining, submitInitialBoardState]);

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
        <div className='flex tracking-widest text-center'>
            <span className={`w-[70px] m-3 text-2xl drop-shadow-sm font-bold ${timerStyle(timeRemaining)} ${(matchStatus === 'gameProper' && isPlayerTurn) && 'text-white'}`}>{formatTime(timeRemaining)}</span>
        </div>
    );
};

export default CountdownTimer;