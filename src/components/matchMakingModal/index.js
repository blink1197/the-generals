import Button from "../formInputs/button";
import MatchMaking from "../../utils/MatchMaking";
import { useState, useRef } from "react";

function MatchMakingModal({ friendlyMatchCode, getMatchId, setFriendlyMatchCode, setMatchId }) {
    const [lobbyMode, setLobbyMode] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);
    const matchCodeRef = useRef(null); // Ref for the textarea

    const copyToClipboard = () => {
        const matchCode = matchCodeRef.current.value;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(matchCode)
                .then(() => {
                    setCopySuccess(true);
                    setTimeout(() => setCopySuccess(false), 3000); // Reset copy success after 3 seconds
                })
                .catch((error) => {
                    console.error('Unable to copy:', error);
                    fallbackCopyTextToClipboard(matchCode);
                });
        } else {
            fallbackCopyTextToClipboard(matchCode);
        }
    };

    const fallbackCopyTextToClipboard = (text) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';  // Prevent scrolling to bottom
        textArea.style.top = '0';
        textArea.style.left = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            const msg = successful ? 'successful' : 'unsuccessful';
            if (successful) {
                setCopySuccess(true);
                setTimeout(() => setCopySuccess(false), 3000); // Reset copy success after 3 seconds
            }
        } catch (err) {
            console.error('Fallback: Could not copy text: ', err);
        }
        document.body.removeChild(textArea);
    };

    const handleJoinMatch = () => {
        setFriendlyMatchCode(matchCodeRef.current.value);
        console.log(matchCodeRef.current.value);
        setMatchId(`m#${MatchMaking.codeToUUID(matchCodeRef.current.value)}`)
    };

    return (
        <div className="absolute z-40 flex flex-col items-center w-5/6 max-w-xl transform -translate-x-1/2 -translate-y-1/2 bg-white border rounded-lg h-[30%] top-1/3 left-1/2  min-w-64 md:h-[27%] shadow-md dark:bg-zinc-500">
            {!lobbyMode && (
                <div className="flex items-center w-full h-full justify-evenly">
                    <button className="w-[40%] p-2 rounded-md  h-2/3 text-balance bg-gray-100 shadow-sm border border-neutral-200 dark:bg-zinc-700"
                        name="create"
                        onClick={() => {
                            getMatchId();
                            setLobbyMode('create');
                        }}
                    >
                        <h1 className="my-3 text-lg font-semibold h-1/4">Create</h1>
                        <h2 className="text-xs h-3/4">Generate a match code and share it with your friend.</h2>
                    </button>

                    <button className="w-[40%] p-2 rounded-md  h-2/3 text-balance bg-gray-100 shadow-sm border border-neutral-200 dark:bg-zinc-700"
                        name="join"
                        onClick={() => {
                            setLobbyMode('join');
                        }}
                    >
                        <h1 className="my-3 text-lg font-semibold h-1/4">Join</h1>
                        <h2 className="text-xs h-3/4">Get the match code from your friend and use it to join the match.</h2>
                    </button>
                </div>
            )}

            {lobbyMode === 'create' && (
                <div className="flex flex-col items-center w-full">
                    <h2 className="mt-4 text-center">Send this match code to your friend.</h2>
                    <input
                        ref={matchCodeRef} // Ref for the textarea
                        className="flex items-center w-5/6 h-12 m-4 mb-1 text-lg text-center bg-gray-100 border rounded-md border-neutral-600 dark:text-zinc-700"
                        value={friendlyMatchCode}
                        disabled

                    />
                    <div className={`transition-opacity duration-500 ${copySuccess ? 'opacity-100' : 'opacity-0'} text-green-600 mb-1 text-xs`}>
                        Match code copied to clipboard!
                    </div>
                    <Button name="copy" text="Copy" onClick={copyToClipboard} />
                    <div className="flex items-center">
                        <img className="w-8 h-8 m-2" src="./assets/loading_spinner.gif" alt="loading spinner" />
                        <h2 className="text-sm">Waiting for the other player to join.</h2>
                    </div>
                </div>
            )}
            {lobbyMode === 'join' && (
                <div className="flex flex-col items-center w-full">
                    <h2 className="mt-2 text-center">Type the match code and click Join.</h2>
                    <input type="text" ref={matchCodeRef} // Ref for the textarea
                        className="flex items-center w-5/6 h-12 m-4 text-lg text-center bg-gray-100 border rounded-md border-neutral-600 dark:text-zinc-700"
                    />
                    <Button name="joinMatch" text="Join" onClick={handleJoinMatch} />
                </div>
            )}
        </div>
    );
}

export default MatchMakingModal;