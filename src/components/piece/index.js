import React from 'react';
import IMAGE_SRC from './const';

const Piece = ({ pieceId }) => {
    const pieceData = IMAGE_SRC.find((item) => item.pieceId === pieceId);
    const imageSrc = pieceData ? pieceData.src : '';
    const backgroundStyle = {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div 
            className={`flex items-center justify-center w-5/6 bg-white border border-gray-400 rounded-md shadow-md h-5/6 ${pieceId.includes('B') ? 'bg-zinc-800' : ''}`} 
            style={imageSrc ? backgroundStyle : {}}
        >
        </div>
    );
};

export default Piece;