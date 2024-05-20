import MatchOption from "./components/matchOption";

function MatchOptions({ handleChangeMatchType, getMatchId }) {
    return (
        <div className="h-full">
            <div className="flex flex-col w-full h-full gap-4 p-10">
                <MatchOption
                    name="classic"
                    description="Play with a random player of same skill"
                    onClick={handleChangeMatchType}
                    getMatchId={getMatchId}
                />
                <MatchOption
                    name="ai"
                    description="Compete with a bot with varying difficulty"
                    onClick={handleChangeMatchType}
                    getMatchId={getMatchId}
                />
                <MatchOption
                    name="friendly"
                    description="Invite a friend to a friendly match"
                    onClick={handleChangeMatchType}
                    getMatchId={getMatchId}
                />
                <MatchOption
                    name="ranked"
                    description="Compete with other players to boost your rank"
                    onClick={handleChangeMatchType}
                    getMatchId={getMatchId}
                />
            </div>
        </div>
    );
}

export default MatchOptions;