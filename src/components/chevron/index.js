import React from 'react';

const Chevron = ({ moveDirection }) => {
    const directionToRotation = {
        'up': 'rotate-0',
        'right': 'rotate-90',
        'down': 'rotate-180',
        'left': '-rotate-90'
    };

    const rotation = directionToRotation[moveDirection];

    return (
        <div className={`flex flex-col items-center justify-evenly ${rotation}`}>
            <div className="w-0 h-0 mb-1 border-b-8 border-l-4 border-r-4 border-transparent border-b-green-300 animate-pulse"></div>
            <div className="w-0 h-0 mb-1 border-b-8 border-l-4 border-r-4 border-transparent border-b-green-300 animate-pulse"></div>
            <div className="w-0 h-0 border-b-8 border-l-4 border-r-4 border-transparent border-b-green-300 animate-pulse "></div>
        </div>
    );
};

export default Chevron;
