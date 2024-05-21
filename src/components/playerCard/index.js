
const PlayerCard = ({
    userName,
    rank,
    lostPieces,
    remainingTime,
    color,
    player
}) => {

    return (
        <div className={`flex items-center justify-between h-20 bg-gray-100 ${color === 'black' ? 'bg-zinc-700 text-white' : null} rounded-md`}>
            <div className="flex items-center m-2 grow">
                <div className="m-2 bg-cover rounded-md w-14 h-14 bg-defaultDP"></div>
                <div className="flex flex-col justify-between my-2 grow">
                    <h1 className="font-semibold">{userName}</h1>
                    <div className="flex items-center justify-between h-10 ">
                        <div className="flex-grow h-full ">
                        </div>
                        {player === 'user' &&
                            (<button className="text-[12px] text-white border border-red-400 bg-red-400 hover:border-red-400 rounded-md h-3/4 hover:text-red-400 hover:bg-white hover:border sm:w-18 sm:text-md md:w-20 md:text-lg md:h-5/6">
                                <h1 className="mx-2">Resign</h1>
                            </button>)}
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-center m-2 ml-0 ${color === 'black' ? 'bg-zinc-600' : 'bg-zinc-300'} rounded-md`}>
                <span className="m-3 text-3xl font-bold">15:00</span>
            </div>
        </div>
    );
};

export default PlayerCard;