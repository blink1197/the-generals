const MoveHistory = ({ playerMoves, matchStatus }) => {
    return (
        <div className="w-full mt-4 border border-gray-200 rounded-md shadow-sm dark:border-gray-800 xl:w-60">
            <table className="w-full text-[12px] text-center ">
                <thead className="w-full">
                    <tr className="w-full bg-gray-100 rounded-md dark:bg-zinc-800 dark:text-white">
                        <td className="w-1/4 text-[14px] font-semibold">
                            No.
                        </td>
                        <td className="w-1/4 text-[14px] font-semibold">
                            Piece
                        </td>
                        <td className="w-1/4 text-[14px] font-semibold">
                            From
                        </td>
                        <td className="w-1/4 text-[14px] font-semibold">
                            To
                        </td>
                    </tr>
                </thead>
            </table>
            <div className="w-full overflow-y-scroll rounded-md max-h-32 no-scrollbar">
                <table className="w-full text-[12px] text-center table-auto ">
                    <tbody className="w-full">
                        {((matchStatus === 'gameProper' || matchStatus === 'gameEnded') && playerMoves.length > 1) &&
                            playerMoves.slice(1).reverse().map((move, index) => (
                                <tr key={index} className={`${index % 2 !== 0 ? 'bg-gray-100 dark:bg-zinc-700 dark:text-white' : 'bg-white dark:bg-zinc-600 dark:text-white'}`}>
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