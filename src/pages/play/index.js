import Board from '../../components/board';
import PlayerCard from '../../components/playerCard';
import MoveHistory from '../../components/moveHistory';

function Play () {
    
    return (
        <div className='flex items-center mx-auto'>
            <div className='flex flex-col ml-10 w-fit'>
                <PlayerCard color={'B'}/>
                <Board />
                <PlayerCard />
            </div>
            <MoveHistory />
      </div>
    );

}

export default Play;