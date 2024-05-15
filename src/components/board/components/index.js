import Piece from "../../piece";

const Cell = ({
    cellId, 
    pieceId, 
    clickMovePiece,
    isSelected,
    isValidCellToMove
    }) => {

    return (
        <div 
            className={`relative flex items-center justify-center bg-gray-200 w-9 h-9 min-w-9 min-h-9 md:w-20 md:h-20 ${isSelected ? 'bg-slate-300' : ''} ${isValidCellToMove ? 'bg-green-300' : ''}`} 
            key={cellId} 
            id={cellId} 
            onClick={clickMovePiece}
        >
            {cellId.split('')[1] === '1' 
                ? <span className="absolute text-[10px] -bottom-4 md:text-base md:-bottom-6 text-gray-300 font-semibold">{cellId.split('')[0]}</span>
                : ""}
            {cellId.split('')[0] === 'A' 
                ? <span className="absolute text-[10px] -left-4 md:text-base md:-left-6 text-gray-300 font-semibold">{cellId.split('')[1]}</span>
                : ""}
            {pieceId ? <Piece pieceId={pieceId}/> : null}
        </div>
    );
};

export default Cell;