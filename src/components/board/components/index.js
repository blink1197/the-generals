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
            className={`relative flex items-center justify-center bg-gray-200 w-10 h-10 min-w-10 min-h-10 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem] lg:w-20 lg:h-20 ${isSelected ? 'bg-slate-300' : ''} ${isValidCellToMove ? 'bg-green-200' : ''}`}
            key={cellId}
            id={cellId}
            onClick={clickMovePiece}
        >
            {cellId.split('')[1] === '1'
                ? <span className="absolute text-[10px] -bottom-4 sm:text-base sm:-bottom-6 text-gray-300 font-semibold">{cellId.split('')[0]}</span>
                : ""}
            {cellId.split('')[0] === 'A'
                ? <span className="absolute text-[10px] -left-2 sm:text-base sm:-left-4 text-gray-300 font-semibold">{cellId.split('')[1]}</span>
                : ""}
            {pieceId ? <Piece pieceId={pieceId} /> : null}
        </div>
    );
};

export default Cell;