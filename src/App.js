
import Board from './components/board';
import PlayerCard from './components/playerCard';
import MoveHistory from './components/moveHistory';
import SideBar from './components/sidebar';

function App() {
  return (
    <div className='flex h-full font-outfit'>
      <div className='flex items-center mx-auto'>
        <SideBar />
        <div className='flex flex-col w-fit'>
          <PlayerCard color={'B'}/>
          <Board />
          <PlayerCard />
        </div>
        <MoveHistory />
      </div>
      
    </div>
  );
}

export default App;
