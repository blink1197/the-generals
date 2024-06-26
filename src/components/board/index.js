import { useState, useEffect } from "react";
import Cell from "./components";
import InitializeBoardModal from "../initializeBoardModal";
import BoardHelper from "../../utils/BoardHelper";

function Board({
    playerColor,
    matchStatus,
    boardState,
    setBoardState,
    isInitialBoardSubmitted,
    isPlayerTurn,
    submitMove,
    playerMoves
}) {
    const [selectedCell, setSelectedCell] = useState("");
    const [playerMove, setPlayerMove] = useState({});
    const [validCellsToMove, setValidCellsToMove] = useState([]);
    const boardHelper = new BoardHelper(playerColor);

    useEffect(() => {
        setValidCellsToMove([]);
        setSelectedCell('');
    }, [matchStatus])

    // Function for moving pieces around during gameProper
    const clickMovePiece = (event) => {
        const { id } = event.currentTarget;
        if (isPlayerTurn) {
            const selectedPiece = boardState[selectedCell];
            const opponentColorCode = boardHelper.getOpponentPieceCode();
            if (selectedCell) {
                const isMoveValid = validCellsToMove.includes(id);
                if (isMoveValid && (!boardState[id] || boardState[id] === opponentColorCode)) {
                    const updatedBoardState = { ...boardState };
                    updatedBoardState[id] = selectedPiece;
                    updatedBoardState[selectedCell] = null;
                    setBoardState(updatedBoardState);
                    setPlayerMove((prevState) => (
                        {
                            ...prevState,
                            pieceId: selectedPiece,
                            from: selectedCell,
                            to: id
                        }
                    ))
                    const moveType = boardHelper.getMoveType(boardState[id]);
                    if (moveType) {
                        submitMove({
                            pieceId: selectedPiece,
                            from: selectedCell,
                            to: id,
                            type: moveType
                        });
                    }
                }
                setSelectedCell("");
                setValidCellsToMove([]);
            } else {
                if (selectedPiece !== opponentColorCode) {
                    const adjacent = boardHelper.getAdjacentCells(id);
                    const validMoves = adjacent.filter(cell => (!boardState[cell] || boardState[cell] === boardHelper.getOpponentPieceCode()));
                    const pieceColor = boardHelper.getPieceColor(boardState[id]);
                    if (pieceColor === playerColor) {
                        setSelectedCell(id);
                        setValidCellsToMove(validMoves);
                    }
                }
            }
        }
    };

    //Function for moving pieces around during board init
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

    const cells = boardHelper.generateCellsArray();

    return (
        <div className="flex items-center justify-center mx-auto mt-4 mb-6 bg-white dark:bg-gray-600">
            <div className="relative grid grid-cols-9 sm:gap-0.5 gap-[1px] md:gap-1">
                {(!matchStatus === 'gameProper' || matchStatus === 'gameStart') && <InitializeBoardModal isInitialBoardSubmitted={isInitialBoardSubmitted} />}
                {cells.map((cell) => (
                    <Cell
                        key={cell}
                        playerColor={playerColor}
                        cellId={cell}
                        pieceId={boardState[cell]}
                        matchStatus={matchStatus}
                        movePiece={matchStatus === 'gameStart'
                            ? arrangePieces
                            : clickMovePiece}
                        isSelected={cell === selectedCell}
                        isValidCellToMove={validCellsToMove.includes(cell) && boardState[selectedCell] && matchStatus !== 'gameStart'}
                        lastPlayerMove={playerMoves.slice(-1)[0]}
                    />
                ))}
            </div>
        </div>
    );
}

export default Board;