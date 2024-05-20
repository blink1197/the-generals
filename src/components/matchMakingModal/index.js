import Button from "../formInputs/button";
import { useState } from "react";

function MatchMakingModal({ handleChangeLobbyMode }) {
    const [lobbyMode, setLobbyMode] = useState(null);
    console.log(lobbyMode);

    return (
        <div className="absolute z-40 flex flex-col items-center w-5/6 max-w-xl transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg h-1/4 top-1/2 left-1/2 border-neutral-700 min-w-64 md:h-1/3">
            {!lobbyMode && (
                <div className="flex items-center w-full h-full justify-evenly">
                    <Button name="create" text="Create" onClick={() => setLobbyMode('create')} />
                    <Button name="join" text="Join" onClick={() => setLobbyMode('join')} />
                </div>
            )}

            {lobbyMode === 'create' && (
                <div className="flex flex-col items-center w-full">
                    <h2 className="mt-2 text-center">Send this match code to your friend.</h2>
                    <textarea
                        className="w-5/6 m-4 bg-gray-100 border rounded-md cursor-not-allowed border-neutral-600"
                        disabled
                    />
                    <Button name="copy" text="Copy" onClick={null} />

                </div>
            )}
            {lobbyMode === 'join' && (
                <div className="flex flex-col items-center w-full">
                    <h2 className="mt-2 text-center">Type the match code and click Join.</h2>
                    <textarea
                        className="w-5/6 m-4 bg-gray-100 border rounded-md cursor-not-allowed border-neutral-600"
                    />
                    <Button name="joinMatch" text="Join" onClick={null} />

                </div>
            )}

        </div>
    );
}

export default MatchMakingModal;