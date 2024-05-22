import { useState } from "react";
import Cell from "./components";
import InitializeBoardModal from "../initializeBoardModal";
import BoardHelper from "../../utils/BoardHelper";

const COLUMNS = 'ABCDEFGHI';
const NUM_COLS = COLUMNS.length;
const ROWS = '87654321';
const NUM_ROWS = ROWS.length;

function Board({
    playerColor,
    matchStatus,
    boardState,
    setBoardState,
    isInitialBoardSubmitted,
    isPlayerTurn,
    setIsPlayerTurn,
    submitMove
}) {
    const columnLetters = playerColor === 'white' ? COLUMNS : COLUMNS.split('').reverse().join('');
    const rowNumbers = playerColor === 'white' ? ROWS : ROWS.split('').reverse().join('');
    const [selectedCell, setSelectedCell] = useState("");
    const [adjacentCells, setAdjacentCells] = useState([]);
    const [playerMove, setPlayerMove] = useState({});
    const [validCellsToMove, setValidCellsToMove] = useState([]);
    const boardHelper = new BoardHelper(playerColor);

    const getAdjacentCells = (cell) => {
        const columns = columnLetters.split('');
        const rows = rowNumbers.split('');
        const column = cell.charAt(0);
        const row = cell.charAt(1);
        const columnIndex = columns.indexOf(column);
        const rowIndex = rows.indexOf(row);
        const directions = [
            { dc: -1, dr: 0 },  // left
            { dc: 1, dr: 0 },   // right
            { dc: 0, dr: -1 },  // above
            { dc: 0, dr: 1 }    // below
        ];

        return directions
            .map(({ dc, dr }) => {
                const newColumnIndex = columnIndex + dc;
                const newRowIndex = rowIndex + dr;
                if (newColumnIndex >= 0 && newColumnIndex < columns.length && newRowIndex >= 0 && newRowIndex < rows.length) {
                    return columns[newColumnIndex] + rows[newRowIndex];
                }
                return null;
            })
            .filter(Boolean);
    };

    const clickMovePiece = (event) => {
        const { id } = event.currentTarget;
        if (isPlayerTurn) {
            const selectedPiece = boardState[selectedCell];
            const isDestinationAdjacent = adjacentCells.includes(id);
            const opponentColorCode = playerColor === 'white' ? 'B' : 'W';
            if (selectedCell) {
                if (isDestinationAdjacent && !boardState[id] && selectedPiece !== opponentColorCode) {
                    const updatedBoardState = { ...boardState };
                    updatedBoardState[id] = selectedPiece;
                    updatedBoardState[selectedCell] = null;
                    setBoardState(updatedBoardState);
                }
                setSelectedCell("");
                setValidCellsToMove([]);
                setPlayerMove((prevState) => (
                    {
                        ...prevState,
                        pieceId: selectedPiece,
                        from: selectedCell,
                        to: id
                    }
                ))
                submitMove({
                    pieceId: selectedPiece,
                    from: selectedCell,
                    to: id,
                    type: boardHelper.getMoveType(boardState[id])
                });
            } else {
                if (selectedPiece !== opponentColorCode) {
                    const adjacent = getAdjacentCells(id);
                    const validMoves = adjacent.filter(cell => !boardState[cell]);
                    const pieceColor = boardHelper.getPieceColor(boardState[id]);
                    if (pieceColor === playerColor) {
                        setSelectedCell(id);
                        setValidCellsToMove(validMoves);
                        setAdjacentCells(adjacent);
                    }
                }
            }
        }
    };

    const arrangePieces = (event) => {
        const { id } = event.currentTarget;
        if (selectedCell) {
            const selectedPiece = boardState[selectedCell];
            const targetPiece = boardState[id];
            if (boardHelper.isValidArrangeCell(selectedCell) && boardHelper.isValidArrangeCell(id)) {
                const updatedBoardState = { ...boardState };
                if (selectedPiece) {
                    updatedBoardState[selectedCell] = targetPiece;
                    updatedBoardState[id] = selectedPiece;
                }
                setBoardState(updatedBoardState);
            }
            setSelectedCell("");
            setValidCellsToMove([]);
        } else {
            if (boardHelper.isValidArrangeCell(id)) {
                setSelectedCell(id);
                setValidCellsToMove(Object.keys(boardState));
            }
        }
    };

    const generateCellId = (row, col) => `${columnLetters[col]}${rowNumbers[row]}`;

    const cells = Array.from({ length: NUM_ROWS * NUM_COLS }, (_, index) => {
        const row = Math.floor(index / NUM_COLS);
        const col = index % NUM_COLS;
        return generateCellId(row, col);
    });

    return (
        <div className="flex items-center justify-center mx-auto my-8 bg-white">
            <div className="relative grid grid-cols-9 sm:gap-0.5 gap-[1px] md:gap-1">
                {(!matchStatus === 'gameProper' || matchStatus === 'gameStart') && <InitializeBoardModal isInitialBoardSubmitted={isInitialBoardSubmitted} />}
                {cells.map((cell) => (
                    <Cell
                        key={cell}
                        playerColor={playerColor}
                        cellId={cell}
                        pieceId={boardState[cell]}
                        movePiece={matchStatus === 'gameStart'
                            ? arrangePieces
                            : clickMovePiece}
                        isSelected={cell === selectedCell}
                        isValidCellToMove={validCellsToMove.includes(cell) && boardState[selectedCell] && matchStatus !== 'gameStart'}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;