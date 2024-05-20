import { useState } from "react";
import Cell from "./components";
import INITIAL_BOARD_STATE from "./const";

const COLUMNS = 'ABCDEFGHI';
const NUM_COLS = COLUMNS.length;
const ROWS = '87654321';
const NUM_ROWS = ROWS.length;

function Board() {
    const [boardState, setBoardState] = useState(INITIAL_BOARD_STATE);
    const [selectedCell, setSelectedCell] = useState("");
    const [adjacentCells, setAdjacentCells] = useState([]);
    const [validCellsToMove, setValidCellsToMove] = useState([]);
    const [moveHistory, setMoveHistory] = useState([]);
    const [lostUnits, setLostUnits] = useState([]);

    const getAdjacentCells = (cell) => {
        const columns = COLUMNS.split('');
        const rows = ROWS.split('');
        const column = cell.charAt(0);
        const row = cell.charAt(1);
        const columnIndex = columns.indexOf(column);
        const rowIndex = rows.indexOf(row);
        const adjacentCells = [];
        const directions = [
            { dc: -1, dr: 0 },  // left
            { dc: 1, dr: 0 },   // right
            { dc: 0, dr: -1 },  // above
            { dc: 0, dr: 1 }    // below
        ];

        directions.forEach(({ dc, dr }) => {
            const newColumnIndex = columnIndex + dc;
            const newRowIndex = rowIndex + dr;
            if (newColumnIndex >= 0 && newColumnIndex < columns.length && newRowIndex >= 0 && newRowIndex < rows.length) {
                adjacentCells.push(columns[newColumnIndex] + rows[newRowIndex]);
            }
        });

        return adjacentCells;
    };

    const clickMovePiece = (event) => {
        const { id } = event.currentTarget;
        if (selectedCell !== "") {
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

    const generateCellId = (row, col) => {
        return `${COLUMNS[col]}${row + 1}`;
    }

    const cells = Array.from({ length: NUM_ROWS * NUM_COLS }, (_, index) => {
        const row = Math.floor(index / NUM_COLS);
        const col = index % NUM_COLS;
        return generateCellId(NUM_ROWS - row - 1, col);
    });

    return (
        <div className="flex items-center justify-center mx-auto my-8 bg-white ">
            <div className="grid grid-cols-9 sm:gap-0.5 gap-[1px] md:gap-1">
                {cells.map((cell) => (
                    <Cell
                        key={cell}
                        cellId={cell}
                        pieceId={boardState[cell]}
                        clickMovePiece={clickMovePiece}
                        isSelected={cell === selectedCell}
                        isValidCellToMove={validCellsToMove.includes(cell) && boardState[selectedCell]}
                    />
                ))}
            </div>
        </div>

    );
}

export default Board;