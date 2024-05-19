
function MatchOptions(props) {
    return (
        <div className="h-full">
            <div className="grid w-full h-full grid-cols-1 gap-4 p-10 md:grid-cols-2">
                <div className="border border-blue-500">
                    Classic
                </div>
                <div className="border border-blue-500">
                    AI Match
                </div>
                <div className="border border-blue-500">
                    Friendly Match
                </div>
                <div className="border border-blue-500">
                    Ranked
                </div>
            </div>
        </div>
    );
}

export default MatchOptions;