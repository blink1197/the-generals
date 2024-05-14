import { useState } from "react";
import Cell from "./components/Cell";
import INITIAL_BOARD_STATE from "./const";

const NUM_ROWS = 8;
const NUM_COLS = 9;


function Board() {
    
    const [boardState, setBoardState] = useState(INITIAL_BOARD_STATE);
    const [selectedCell, setSelectedCell] = useState("");

    const clickMovePiece = (event) => {
        const { id } = event.currentTarget;
        if (selectedCell !== "") {
            const selectedPiece = boardState[selectedCell];
            if (!boardState[id] && selectedPiece) {
                const updatedBoardState = { ...boardState };
                updatedBoardState[id] = selectedPiece;
                updatedBoardState[selectedCell] = null;
                setBoardState(updatedBoardState);
            }
            setSelectedCell("");
        } else {
            setSelectedCell(id);
        }
    };

    const generateCellId = (row, col) => {
        const columns = 'ABCDEFGHI';
        return `${columns[col]}${row + 1}`;
    }

    const cells = Array.from({ length: NUM_ROWS * NUM_COLS }, (_, index) => {
        const row = Math.floor(index / NUM_COLS);
        const col = index % NUM_COLS;
        return generateCellId(NUM_ROWS - row - 1, col); 
    });

    return (
        <div className="flex items-center justify-center min-h-screen mx-auto my-auto bg-white">
            <div className="grid grid-cols-9 gap-1">
                {cells.map((cell) => (
                    <Cell 
                        key={cell} 
                        cellId={cell} 
                        pieceId={boardState[cell]} 
                        clickMovePiece={clickMovePiece}
                        isSelected={cell === selectedCell ? true : false}
                    />
                ))}
            </div>
        </div>
        
    );
}

export default Board;