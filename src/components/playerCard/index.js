import CountdownTimer from "../countDownTimer";

const PlayerCard = ({
    userName,
    rank,
    lostPieces,
    color,
    player,
    matchStatus,
    submitInitialBoardState,
    isInitialBoardSubmitted,
    isPlayerTurn
}) => {
    return (
        <div className={`flex items-center shadow-md justify-between h-20 bg-gray-100 ${color === 'black' ? 'bg-zinc-700 text-white' : 'text-gray-800'} rounded-sm`}>
            <div className="flex items-center m-2 grow">
                <div className="m-2 bg-cover rounded-sm w-14 h-14 bg-defaultDP"></div>
                <div className="flex flex-col justify-between my-2 grow">
                    <div className="relative">
                        <h1 className="font-semibold">{userName}</h1>
                    </div>
                    <div className="flex items-center justify-between h-10">
                        <div className="relative flex-grow h-full">
                            {(matchStatus === 'gameStart' && player === 'user' && !isInitialBoardSubmitted) &&
                                (<button
                                    className="text-[12px] text-white border border-green-500 bg-green-500 hover:border-green-500 rounded-md h-3/4 hover:text-green-500 hover:bg-white hover:border sm:w-18 sm:text-md md:w-20 md:text-lg md:h-5/6 absolute bottom-[5px]"
                                    onClick={submitInitialBoardState}
                                >
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
            <div className={`flex items-center justify-center m-2 ml-0 rounded-sm ${(isPlayerTurn && matchStatus === 'gameProper') ? 'bg-green-500' : color === 'black' ? 'bg-zinc-500' : 'bg-zinc-300'}`}>

                {((matchStatus === 'gameStart' && player === 'user' && !isInitialBoardSubmitted) || matchStatus === 'gameProper') && (
                    <CountdownTimer
                        startingTime={matchStatus === 'gameStart' ? 3 : 10}
                        submitInitialBoardState={matchStatus === 'gameStart' ? submitInitialBoardState : undefined}
                        pauseTimer={matchStatus === 'gameProper' && !isPlayerTurn}
                        color={color}
                        matchStatus={matchStatus}
                        player={player}
                        isPlayerTurn={isPlayerTurn}
                    />
                )}
            </div>
        </div>
    );
};

export default PlayerCard;