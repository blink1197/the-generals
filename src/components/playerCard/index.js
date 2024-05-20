
const PlayerCard = ({
    userName,
    rank,
    lostPieces,
    remainingTime,
    color
}) => {

    return (
        <div className={`flex items-center justify-between h-20 bg-gray-100 ${color === 'B' ? 'bg-zinc-700 text-white' : null} rounded-md`}>
            <div className="flex items-center m-2 h-5/6 grow">
                <div className="m-2 bg-cover rounded-md w-14 h-14 bg-defaultDP"></div>
                <div className="flex flex-col justify-between grow">
                    <h1 className="font-semibold">USERNAME (RANK)</h1>
                    <div className="h-10">

                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-center m-2 ${color === 'B' ? 'bg-zinc-600' : 'bg-zinc-300'} h-5/6 rounded-md`}>
                <span className="m-3 text-3xl font-bold">15:00</span>
            </div>
        </div>
    );
};

export default PlayerCard;