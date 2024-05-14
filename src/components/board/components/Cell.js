import Piece from "../../piece";

const Cell = ({cellId, pieceId}) => {

    return (
        <div key={cellId} id={cellId} className="flex items-center justify-center bg-gray-200 w-9 h-9 min-w-9 min-h-9 md:w-20 md:h-20">
            {pieceId ? <Piece pieceId={pieceId}/> : null}
        </div>
    );
};

export default Cell;