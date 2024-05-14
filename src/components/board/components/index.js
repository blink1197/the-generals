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
            className={`flex items-center justify-center bg-gray-200 w-9 h-9 min-w-9 min-h-9 md:w-20 md:h-20 ${isSelected ? 'bg-slate-300' : ''} ${isValidCellToMove ? 'bg-green-300' : ''}`} 
            key={cellId} 
            id={cellId} 
            onClick={clickMovePiece}
        >
            {pieceId ? <Piece pieceId={pieceId}/> : null}
        </div>
    );
};

export default Cell;