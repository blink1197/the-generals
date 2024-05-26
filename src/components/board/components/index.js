import Piece from "../../piece";
import Chevron from "../../chevron";
import BoardHelper from "../../../utils/BoardHelper";


const Cell = ({
    cellId,
    playerColor,
    pieceId,
    movePiece,
    isSelected,
    isValidCellToMove,
    lastPlayerMove,
    matchStatus,
}) => {

    const [columnNumber, rowNumber] = cellId.split('');
    const boardHelper = new BoardHelper(playerColor);
    if (matchStatus === 'gameProper' && lastPlayerMove) {
        console.log(boardHelper.getLastMoveDirection(lastPlayerMove.from, lastPlayerMove.to))
    }
    return (
        <div
            className={`relative flex items-center justify-center bg-gray-200 w-10 h-10 min-w-10 min-h-10 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem] lg:w-20 lg:h-20 ${isSelected ? 'bg-slate-300' : ''} ${isValidCellToMove ? 'bg-green-200' : ''}`}
            key={cellId}
            id={cellId}
            onClick={movePiece}
        >
            {rowNumber === '1' && playerColor === 'white'
                ? <span className="absolute text-[10px] -bottom-4 sm:text-base sm:-bottom-6 text-gray-300 font-semibold">{columnNumber}</span>
                : ""}
            {columnNumber === 'A' && playerColor === 'white'
                ? <span className="absolute text-[10px] -left-2 sm:text-base sm:-left-4 text-gray-300 font-semibold">{rowNumber}</span>
                : ""}

            {rowNumber === '8' && playerColor === 'black'
                ? <span className="absolute text-[10px] -bottom-4 sm:text-base sm:-bottom-6 text-gray-300 font-semibold">{columnNumber}</span>
                : ""}
            {columnNumber === 'I' && playerColor === 'black'
                ? <span className="absolute text-[10px] -left-2 sm:text-base sm:-left-4 text-gray-300 font-semibold">{rowNumber}</span>
                : ""}

            {pieceId ? <Piece pieceId={pieceId} /> : null}
            {(matchStatus === 'gameProper' && lastPlayerMove && lastPlayerMove.from === cellId) &&
                <Chevron
                    moveDirection={boardHelper.getLastMoveDirection(lastPlayerMove.from, lastPlayerMove.to)}
                />}
        </div>
    );
};

export default Cell;