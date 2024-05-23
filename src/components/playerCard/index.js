import CountdownTimer from "../countDownTimer";

const PlayerCard = ({
    userName,
    rank,
    lostPieces,
    remainingTime,
    color,
    player,
    matchStatus,
    submitInitialBoardState,
    isInitialBoardSubmitted,
    isPlayerTurn
}) => {

    return (
        <div className={`flex items-center justify-between h-20 bg-gray-100 ${color === 'black' ? 'bg-zinc-700 text-white' : null} rounded-md`}>
            <div className="flex items-center m-2 grow">
                <div className="m-2 bg-cover rounded-md w-14 h-14 bg-defaultDP"></div>
                <div className="flex flex-col justify-between my-2 grow">
                    <div className="relative">
                        <h1 className="font-semibold">{userName}</h1>
                        {(isPlayerTurn && matchStatus === 'gameProper') && <div className="absolute w-3 h-3 bg-green-500 border border-gray-200 rounded full top-1/3 right-5"></div>}

                    </div>
                    <div className="flex items-center justify-between h-10">
                        <div className="relative flex-grow h-full">
                            {(matchStatus === 'gameStart' && player === 'user' && !isInitialBoardSubmitted) &&
                                (<button
                                    className="text-[12px] text-white border border-green-500 bg-green-500 hover:border-green-500 rounded-md h-3/4 hover:text-green-500 hover:bg-white hover:border sm:w-18 sm:text-md md:w-20 md:text-lg md:h-5/6 absolute bottom-[5px]"
                                    onClick={submitInitialBoardState}>
                                    <h1 className="mx-2">Submit Board</h1>
                                </button>)
                            }
                        </div>
                        {player === 'user' &&
                            (<button className="text-[12px] text-white border border-red-400 bg-red-400 hover:border-red-400 rounded-md h-3/4 hover:text-red-400 hover:bg-white hover:border sm:w-18 sm:text-md md:w-20 md:text-lg md:h-5/6">
                                <h1 className="mx-2">Resign</h1>
                            </button>)}
                    </div>
                </div>
            </div>
            <div className={`flex items-center justify-center m-2 ml-0 ${color === 'black' ? 'bg-zinc-600' : 'bg-zinc-300'} rounded-md`}>
                {(matchStatus === 'gameStart' && player === 'user' && !isInitialBoardSubmitted) && <CountdownTimer startingTime={0.2} submitInitialBoardState={submitInitialBoardState} />}
                {matchStatus === 'gameProper' && <CountdownTimer startingTime={10} pauseTimer={!isPlayerTurn} />}
            </div>
        </div>
    );
};

export default PlayerCard;