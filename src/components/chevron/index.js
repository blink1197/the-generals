import React from 'react';

const Chevron = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-0 h-0 mb-1 border-b-8 border-l-4 border-r-4 border-transparent border-b-green-400 animate-pulse"></div>
            <div className="w-0 h-0 mb-1 border-b-8 border-l-4 border-r-4 border-transparent border-b-green-400 animate-pulse"></div>
            <div className="w-0 h-0 border-b-8 border-l-4 border-r-4 border-transparent border-b-green-400 animate-pulse "></div>
        </div>
    );
};

export default Chevron;
