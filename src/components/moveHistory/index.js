
const MoveHistory = ({ }) => {

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
                    <tr className="w-full">
                        <td className="w-1/4">
                            1.
                        </td>
                        <td className="w-1/4">
                            SPY-W
                        </td>
                        <td className="w-1/4">
                            D2
                        </td>
                        <td className="w-1/4">
                            D3
                        </td>

                    </tr>
                    <tr className="w-full bg-gray-100">
                        <td className="w-1/4">
                            2.
                        </td>
                        <td className="w-1/4">
                            B
                        </td>
                        <td className="w-1/4">
                            G6
                        </td>
                        <td className="w-1/4">
                            G5
                        </td>

                    </tr>
                    <tr className="w-full">
                        <td className="w-1/4">
                            3.
                        </td>
                        <td className="w-1/4">
                            5SG-W
                        </td>
                        <td className="w-1/4">
                            G6
                        </td>
                        <td className="w-1/4">
                            G5
                        </td>

                    </tr>
                    <tr className="w-full bg-gray-100">
                        <td className="w-1/4">
                            4.
                        </td>
                        <td className="w-1/4">
                            B
                        </td>
                        <td className="w-1/4">
                            G6
                        </td>
                        <td className="w-1/4">
                            xG5W
                        </td>

                    </tr>
                    <tr className="w-full ">
                        <td className="w-1/4">
                            5.
                        </td>
                        <td className="w-1/4">
                            PVT
                        </td>
                        <td className="w-1/4">
                            G6
                        </td>
                        <td className="w-1/4">
                            G5
                        </td>

                    </tr>
                    <tr className="w-full bg-gray-100">
                        <td className="w-1/4">
                            6.
                        </td>
                        <td className="w-1/4">
                            B
                        </td>
                        <td className="w-1/4">
                            G6
                        </td>
                        <td className="w-1/4">
                            xG5B
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MoveHistory;