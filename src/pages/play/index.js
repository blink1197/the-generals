import Board from "../../components/board";
import PlayerCard from "../../components/playerCard";
import MoveHistory from "../../components/moveHistory";
import MatchOptions from "../../components/matchOptions";

function Play() {
    return (
        // <MatchOptions />
        <div className="flex items-center mx-auto">

            <div className="flex flex-col mx-auto mt-4 w-fit">
                <PlayerCard color={"B"} />
                <Board />
                <PlayerCard />
            </div>
            {/* <MoveHistory /> */}
        </div>

    );
}

export default Play;
