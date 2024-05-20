import MatchOption from "./components/matchOption";

function MatchOptions({ handleChangeMatchType }) {
    return (
        <div className="h-full">
            <div className="flex flex-col w-full h-full gap-4 p-10">
                <MatchOption
                    name="classic"
                    description="Play with a random player of same skill"
                    handleChangeMatchType={handleChangeMatchType}
                />
                <MatchOption
                    name="ai"
                    description="Compete with a bot with varying difficulty"
                    handleChangeMatchType={handleChangeMatchType}
                />
                <MatchOption
                    name="friendly"
                    description="Invite a friend to a friendly match"
                    handleChangeMatchType={handleChangeMatchType}
                />
                <MatchOption
                    name="ranked"
                    description="Compete with other players to boost your rank"
                    handleChangeMatchType={handleChangeMatchType}
                />
            </div>
        </div>
    );
}

export default MatchOptions;