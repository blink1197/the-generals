import React, { useState, useCallback, useEffect } from 'react';
import Board from "../../components/board";
import PlayerCard from "../../components/playerCard";
import MoveHistory from "../../components/moveHistory";
import MatchOptions from "../../components/matchOptions";
import MatchMakingModal from "../../components/matchMakingModal";
import AxiosService from "../../service/axiosService";
import { v4 as uuidv4 } from 'uuid';

import {
    INITIAL_BOARD_STATE_WHITE,
    INITIAL_BOARD_STATE_BLACK
} from "../../components/board/const";


function Play() {
    const [matchType, setMatchType] = useState(null);
    const [friendlyMatchCode, setFriendlyMatchCode] = useState('');
    const [matchId, setMatchId] = useState(null);
    const userId = `p#${uuidv4()}`;
    const [userName, setUserName] = useState(`user-${userId.slice(2, 5)}`);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [socket, setSocket] = useState(null);
    const [isSocketConnected, setIsSocketConnected] = useState(false);
    const [opponentUserName, setOpponentUserName] = useState("");
    const [matchStatus, setMatchStatus] = useState("notYetStarted");
    const [playerColor, setPlayerColor] = useState("white");
    const [connectionId, setConnectionId] = useState("");
    const [playerUserName, setPlayerUserName] = useState("User-Player");
    const [boardState, setBoardState] = useState({});
    const [playerMove, setPlayerMove] = useState({});
    const [turnNumber, setTurnNumber] = useState(0);
    const [isPlayerTurn, setIsPlayerTurn] = useState(false);
    const [isInitialBoardSubmitted, setIsInitialBoardSubmitted] = useState(false);
    const [playerMoves, setPlayerMoves] = useState([]);

    const getMatchId = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const { message } = await AxiosService.postData('/create-match', { userId, matchType: 'friendly' });
            setFriendlyMatchCode(message.matchCode);
            setMatchId(message.matchId);

        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [userId]);

    const sendMessage = (message) => {
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(message));
        } else {
            console.error('WebSocket connection is not open');
        }
    }

    const handleUserAction = (action, data) => {
        const message = {
            action,
            matchId: matchId,
            playerId: userId,
            userName: userName,
            data
        };
        sendMessage(message);
    }

    const handleChangeMatchType = (event) => {
        setMatchType(event.currentTarget.name);
    }

    const submitInitialBoardState = () => {
        handleUserAction('initializeBoard', boardState);
        setIsInitialBoardSubmitted(true);
    }

    const submitMove = (move) => {
        const data = {
            boardState: boardState,
            move: { ...move, turnNumber: turnNumber }
        }
        handleUserAction('makeMove', data);
        setIsPlayerTurn(false);
    }

    useEffect(() => {
        if (matchId) {
            const websocketsUrl = window.location.hostname === 'localhost'
                ? process.env.REACT_APP_API_WS_URL_LOCAL
                : process.env.REACT_APP_API_WS_URL_NETWORK
            const newSocket = new WebSocket(`ws://${websocketsUrl}`);
            setSocket(newSocket);

            newSocket.addEventListener('open', () => {
                console.log('Connected to WebSocket server');
                setIsSocketConnected(true);
            });

            newSocket.addEventListener('message', (event) => {
                try {
                    const data = JSON.parse(event.data);
                    if (data.status === 'gameStart') {
                        setMatchStatus(data.status);
                        setPlayerColor(data.playerColor);
                        setOpponentUserName(data.opponentUserName);
                        setConnectionId(data.connectionId);

                        const initialBoardState = data.playerColor === 'white'
                            ? INITIAL_BOARD_STATE_WHITE
                            : INITIAL_BOARD_STATE_BLACK;
                        setBoardState(initialBoardState);
                    }

                    if (data.status === 'gameProper') {
                        setMatchStatus(data.status);
                        setTurnNumber(data.turnNumber);
                        setIsPlayerTurn(data.isPlayerTurn);
                        setBoardState(data.boardState);
                        setPlayerMoves(prevMoves => [...prevMoves, data.move]);
                    }
                } catch (error) {
                    console.error('Error parsing WebSocket message:', error);
                }
            });

            newSocket.addEventListener('close', () => {
                console.log('Connection to WebSocket server closed');
                setIsSocketConnected(false);
            });

            return () => {
                newSocket.close();
            };
        }
    }, [matchId]);

    useEffect(() => {
        if (isSocketConnected && matchId) {
            console.log('WebSocket is connected, joining match');
            handleUserAction('joinMatch', { userName: userName });
        }
    }, [isSocketConnected, matchId]);

    return (
        <>
            {!matchType &&
                <MatchOptions handleChangeMatchType={handleChangeMatchType} />
            }

            {(matchType === 'friendly' && matchStatus !== 'gameStart' && matchStatus !== 'gameProper') &&
                <MatchMakingModal
                    friendlyMatchCode={friendlyMatchCode}
                    getMatchId={getMatchId}
                    setFriendlyMatchCode={setFriendlyMatchCode}
                    setMatchId={setMatchId}
                />
            }

            {(matchStatus === 'gameStart' || matchStatus === 'gameProper') &&
                (<div className="relative flex flex-col items-center mx-auto">
                    <div className="flex flex-col mx-auto mt-4 w-fit xl:flex-row">
                        <div>
                            <PlayerCard
                                color={playerColor === 'white' ? 'black' : 'white'}
                                userName={opponentUserName}
                                player={'opponent'}
                                matchStatus={matchStatus}
                                isPlayerTurn={!isPlayerTurn}
                            />
                            <Board
                                color={playerColor}
                                matchStatus={matchStatus}
                                boardState={boardState}
                                setBoardState={setBoardState}
                                isInitialBoardSubmitted={isInitialBoardSubmitted}
                                setIsPlayerTurn={setIsPlayerTurn}
                                isPlayerTurn={isPlayerTurn}
                                playerColor={playerColor}
                                submitMove={submitMove}

                            />
                            <PlayerCard
                                color={playerColor}
                                userName={userName}
                                player={'user'}
                                matchStatus={matchStatus}
                                submitInitialBoardState={() => submitInitialBoardState()}
                                isInitialBoardSubmitted={isInitialBoardSubmitted}
                                isPlayerTurn={isPlayerTurn}
                            />
                        </div>
                        <MoveHistory playerMoves={playerMoves} matchStatus={matchStatus} />
                    </div>
                </div>)
            }
        </>
    );
}

export default Play;