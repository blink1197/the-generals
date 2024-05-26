const MoveHistory = ({ playerMoves, matchStatus }) => {
    return (
        <div className="w-full mt-4 border border-gray-200 rounded-md shadow-sm xl:w-60">
            <table className="w-full text-[12px] text-center ">
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
            </table>
            <div className="w-full overflow-y-scroll max-h-32 no-scrollbar">
                <table className="w-full text-[12px] text-center table-auto">
                    <tbody className="w-full">
                        {(matchStatus === 'gameProper' && playerMoves.length > 1) &&
                            playerMoves.slice(1).reverse().map((move, index) => (
                                <tr key={index} className={`${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    <td className="w-1/4">{move.turnNumber}</td>
                                    <td className="w-1/4">{move.pieceId}</td>
                                    <td className="w-1/4">{move.from}</td>
                                    <td className="w-1/4">{move.to}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MoveHistory;