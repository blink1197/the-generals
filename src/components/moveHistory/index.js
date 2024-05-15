
const MoveHistory = ({ }) => {

    return (
        <div className="ml-4 w-60 h-[668px] border border-gray-200">
            <table className="w-full text-[12px] text-center border">
                <thead className="w-full">
                    <tr className="w-full bg-gray-200">
                        <td className="w-1/5">
                            No.
                        </td>
                        <td className="w-1/5">
                            Piece
                        </td>
                        <td className="w-1/5">
                            From
                        </td>
                        <td className="w-1/5">
                            To
                        </td>
                        <td className="w-1/5">
                            Win
                        </td>
                    </tr>
                </thead>
                <tbody className="w-full">
                    <tr className="w-full">
                        <td className="w-1/5">
                            1.
                        </td>
                        <td className="w-1/5">
                            SPY-W
                        </td>
                        <td className="w-1/5">
                            D2
                        </td>
                        <td className="w-1/5">
                            D3
                        </td>
                        <td className="w-1/5">
                            
                        </td>
                    </tr>
                    <tr className="w-full bg-gray-200">
                        <td className="w-1/5">
                            2.
                        </td>
                        <td className="w-1/5">
                            B
                        </td>
                        <td className="w-1/5">
                            G6
                        </td>
                        <td className="w-1/5">
                            G5
                        </td>
                        <td className="w-1/5">
                            
                        </td>
                    </tr>
                    <tr className="w-full">
                        <td className="w-1/5">
                            3.
                        </td>
                        <td className="w-1/5">
                            5SG-W
                        </td>
                        <td className="w-1/5">
                            G6
                        </td>
                        <td className="w-1/5">
                            G5
                        </td>
                        <td className="w-1/5">
                            
                        </td>
                    </tr>
                    <tr className="w-full bg-gray-200">
                        <td className="w-1/5">
                            4.
                        </td>
                        <td className="w-1/5">
                            B
                        </td>
                        <td className="w-1/5">
                            G6
                        </td>
                        <td className="w-1/5">
                            xG5
                        </td>
                        <td className="w-1/5">
                            5SG-W
                        </td>
                    </tr>
                    <tr className="w-full ">
                        <td className="w-1/5">
                            5.
                        </td>
                        <td className="w-1/5">
                            PVT
                        </td>
                        <td className="w-1/5">
                            G6
                        </td>
                        <td className="w-1/5">
                            G5
                        </td>
                        <td className="w-1/5">
                            
                        </td>
                    </tr>
                    <tr className="w-full bg-gray-200">
                        <td className="w-1/5">
                            6.
                        </td>
                        <td className="w-1/5">
                            B
                        </td>
                        <td className="w-1/5">
                            G6
                        </td>
                        <td className="w-1/5">
                            xG5
                        </td>
                        <td className="w-1/5">
                            B
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MoveHistory;