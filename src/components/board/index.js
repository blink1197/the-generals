import { useState } from "react";
import Cell from "./components";
import InitializeBoardModal from "../initializeBoardModal";

const COLUMNS = 'ABCDEFGHI';
const NUM_COLS = COLUMNS.length;
const ROWS = '87654321';
const NUM_ROWS = ROWS.length;

function Board({
    color,
    matchStatus,
    boardState,
    setBoardState,
    isInitialBoardSubmitted,
    isPlayerTurn
}) {
    const columnLetters = color === 'white' ? COLUMNS : COLUMNS.split('').reverse().join('');
    const rowNumbers = color === 'white' ? ROWS : ROWS.split('').reverse().join('');
    const [selectedCell, setSelectedCell] = useState("");
    const [adjacentCells, setAdjacentCells] = useState([]);
    const [validCellsToMove, setValidCellsToMove] = useState([]);

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

    const isValidArrangeCell = (cell) => {
        const row = cell.charAt(1);
        if (color === 'white') {
            return ['1', '2', '3'].includes(row);
        } else {
            return ['6', '7', '8'].includes(row);
        }
    };

    const clickMovePiece = (event) => {
        const { id } = event.currentTarget;
        if (selectedCell) {
            const selectedPiece = boardState[selectedCell];
            const isDestinationAdjacent = adjacentCells.includes(id);

            if (isDestinationAdjacent && !boardState[id] && selectedPiece) {
                const updatedBoardState = { ...boardState };
                updatedBoardState[id] = selectedPiece;
                updatedBoardState[selectedCell] = null;
                setBoardState(updatedBoardState);
            }
            setSelectedCell("");
            setValidCellsToMove([]);
        } else {
            setSelectedCell(id);
            const adjacent = getAdjacentCells(id);
            setAdjacentCells(adjacent);
            const validMoves = adjacent.filter(cell => !boardState[cell]);
            setValidCellsToMove(validMoves);
        }
    };

    const arrangePieces = (event) => {
        const { id } = event.currentTarget;
        if (selectedCell) {
            const selectedPiece = boardState[selectedCell];
            const targetPiece = boardState[id];

            // Check if both cells are in the valid rows for arranging pieces
            if (isValidArrangeCell(selectedCell) && isValidArrangeCell(id)) {
                const updatedBoardState = { ...boardState };
                if (selectedPiece) {
                    updatedBoardState[selectedCell] = targetPiece;  // Move target piece to selected cell
                    updatedBoardState[id] = selectedPiece;  // Move selected piece to target cell
                }
                setBoardState(updatedBoardState);
            }
            setSelectedCell("");
            setValidCellsToMove([]);
        } else {
            if (isValidArrangeCell(id)) {
                setSelectedCell(id);
                setValidCellsToMove(Object.keys(boardState));  // All cells are valid moves for arrangePieces
            }
        }
    };

    const handleCellClick = (event) => {
        if (matchStatus === 'gameStart') {
            arrangePieces(event);
        } else {
            clickMovePiece(event);
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
                        playerColor={color}
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