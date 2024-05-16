
import Board from './components/board';
import PlayerCard from './components/playerCard';
import MoveHistory from './components/moveHistory';
import SideBar from './components/sidebar';
import { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001")


function App() {

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to server');
    });

    socket.on('disconnect', () => {
      console.log('disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);
  
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
