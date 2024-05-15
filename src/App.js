
import Board from './components/board';
import PlayerCard from './components/playerCard';

function App() {
  return (
    <div className='w-full h-full font-outfit'>
      <div className='flex flex-col mx-auto my-2 w-fit'>
        <PlayerCard color={'B'}/>
        <Board />
        <PlayerCard />
      </div>
    </div>
  );
}

export default App;
