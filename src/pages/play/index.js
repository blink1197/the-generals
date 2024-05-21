import React, { useState, useCallback, useEffect } from 'react';
import Board from "../../components/board";
import PlayerCard from "../../components/playerCard";
import MoveHistory from "../../components/moveHistory";
import MatchOptions from "../../components/matchOptions";
import MatchMakingModal from "../../components/matchMakingModal";
import AxiosService from "../../service/axiosService";
import { v4 as uuidv4 } from 'uuid';

function Play() {
    const [matchType, setMatchType] = useState(null);
    const [friendlyMatchCode, setFriendlyMatchCode] = useState('');
    const [userId] = useState(uuidv4());
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [socket, setSocket] = useState(null);
    const [isSocketConnected, setIsSocketConnected] = useState(false);
    const [opponentUserName, setOpponentUserName] = useState("");
    const [matchStatus, setMatchStatus] = useState("not yet started");
    const [playerColor, setPlayerColor] = useState("white");
    const [connectionId, setConnectionId] = useState("");
    const [playerUserName, setPlayerUserName] = useState("User-Player");


    const getMatchId = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await AxiosService.postData('/create-match', { userId: userId });
            setFriendlyMatchCode(response.matchId);
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
            action: action,
            matchId: friendlyMatchCode,
            playerId: userId,
            data: data
        };
        sendMessage(message);
    }

    useEffect(() => {
        if (friendlyMatchCode) {
            const newSocket = new WebSocket(`ws://${process.env.REACT_APP_API_WS_URL}`);
            setSocket(newSocket);

            newSocket.addEventListener('open', () => {
                console.log('Connected to WebSocket server');
                setIsSocketConnected(true);
                handleUserAction('joinMatch', null); // Call handleUserAction after connection
            });

            newSocket.addEventListener('message', (event) => {
                console.log('Message from server:', event.data);
                const data = JSON.parse(event.data)

                if (data.status === 'gameStart') {
                    setMatchStatus(data.status);
                    setPlayerColor(data.playerColor);
                    setOpponentUserName(data.opponentUserName);
                    setConnectionId(data.connectionId);
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
    }, [friendlyMatchCode]);

    useEffect(() => {
        if (isSocketConnected) {
            console.log('WebSocket is connected, joining match');
            handleUserAction('joinMatch', { matchId: friendlyMatchCode }); // Call handleUserAction after connection is confirmed
        }
    }, [isSocketConnected]);

    const handleChangeMatchType = (event) => {
        setMatchType(event.currentTarget.name);
    }

    return (
        <>
            {!matchType && <MatchOptions handleChangeMatchType={handleChangeMatchType} />}
            {matchType === 'friendly' && matchStatus !== 'gameStart' && <MatchMakingModal friendlyMatchCode={friendlyMatchCode} getMatchId={getMatchId} setFriendlyMatchCode={setFriendlyMatchCode} />}
            {matchStatus === 'gameStart' &&
                (<div className="relative flex flex-col items-center mx-auto">
                    <div className="flex flex-col mx-auto mt-4 w-fit xl:flex-row">
                        <div>
                            <PlayerCard
                                color={playerColor === 'white' ? 'black' : 'white'}
                                userName={opponentUserName}
                                player={'opponent'}
                            />
                            <Board color={playerColor} />
                            <PlayerCard
                                color={playerColor}
                                userName={playerUserName}
                                player={'user'}
                            />
                        </div>
                        <MoveHistory />
                    </div>
                </div>)}
        </>
    );
}

export default Play;