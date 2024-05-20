import Board from "../../components/board";
import PlayerCard from "../../components/playerCard";
import MoveHistory from "../../components/moveHistory";
import MatchOptions from "../../components/matchOptions";
import MatchMakingModal from "../../components/matchMakingModal";
import { useState } from "react";

function Play() {
    const [matchType, setMatchType] = useState(null);
    const [friendlyMatchCode, setFriendlyMatchCode] = useState(null)
    const [matchStarted, setMatchStarted] = useState(false);
    const handleChangeMatchType = (event) => {
        setMatchType(event.currentTarget.name);
    }

    return (
        <>
            {!matchType && <MatchOptions handleChangeMatchType={handleChangeMatchType} />}
            {matchType === 'friendly' && !matchStarted && <MatchMakingModal />}
            <div className="relative flex flex-col items-center mx-auto">

                <div className="flex flex-col mx-auto mt-4 w-fit xl:flex-row">
                    <div>
                        <PlayerCard color={"B"} />
                        <Board />
                        <PlayerCard />
                    </div>
                    <MoveHistory />
                </div>
            </div>
        </>
    );
}

export default Play;
