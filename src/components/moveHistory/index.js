const MoveHistory = ({ playerMoves, matchStatus }) => {
    return (
        <div className="w-full mt-4 rounded-md xl:w-60">
            <table className="w-full text-[12px] text-center border">
                <thead className="w-full">
                    <tr className="w-full bg-gray-100">
                        <td className="w-1/4">
                            No.
                        </td>
                        <td className="w-1/4">
                            Piece
                        </td>
                        <td className="w-1/4">
                            From
                        </td>
                        <td className="w-1/4">
                            To
                        </td>
                    </tr>
                </thead>
                <tbody className="w-full">
                    {(matchStatus === 'gameProper' && playerMoves.length > 1) &&
                        playerMoves.slice(1).reverse().map((move, index) => (
                            <tr key={index}>
                                <td>{move.turnNumber}</td>
                                <td>{move.pieceId}</td>
                                <td>{move.from}</td>
                                <td>{move.to}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MoveHistory;