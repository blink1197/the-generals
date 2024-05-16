
import Board from './components/board';
import PlayerCard from './components/playerCard';
import MoveHistory from './components/moveHistory';
import SideBar from './components/sidebar';
import { useEffect } from 'react';
import io from 'socket.io-client';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import Rules from './pages/rules';
import Watch from './pages/watch';
import Socials from './pages/socials';
import Settings from './pages/settings';
import Account from './pages/account';
import Help from './pages/help';


function App() {
  return (
    <div className='flex h-full font-outfit'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<Play />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/socials' element={<Socials />} />
        <Route path='/account' element={<Account />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/help' element={<Help />} />
      </Routes>
      
    </div>
  );
}

export default App;
