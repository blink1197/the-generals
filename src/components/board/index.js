import { useState } from "react";
import Cell from "./components/Cell";
import INITIAL_BOARD_STATE from "./const";

const NUM_ROWS = 8;
const NUM_COLS = 9;


function Board() {
    
    const [boardState, setBoardState] = useState(INITIAL_BOARD_STATE);

    const generateCellId = (row, col) => {
        const columns = 'ABCDEFGHI';
        return `${columns[col]}${row + 1}`;
    }

    const cells = Array.from({ length: NUM_ROWS * NUM_COLS }, (_, index) => {
        const row = Math.floor(index / NUM_COLS);
        const col = index % NUM_COLS;
        return generateCellId(NUM_ROWS - row - 1, col); // Adjust row index to start from the bottom
    });

    return (
        <div className="flex items-center justify-center min-h-screen mx-auto my-auto bg-white">
            <div className="grid grid-cols-9 gap-1">
                {cells.map((cell) => (
                    <Cell key={cell} cellId={cell} pieceId={boardState[cell]}/>
                ))}
            </div>
        </div>
        
    );
}

export default Board;