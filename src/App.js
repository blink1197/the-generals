import SideBar from './components/sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Play from './pages/play';
import Rules from './pages/rules';
import Watch from './pages/watch';
import Socials from './pages/socials';
import Settings from './pages/settings';
import Account from './pages/account';
import Help from './pages/help';
import TopBar from './components/topbar';
import NotFound from './pages/notFound';


function App() {
  return (
    <div className='flex w-screen h-screen font-outfit'>
      <SideBar />
      <div className='relative flex-grow h-full min-w-[360px]' >
        <TopBar />
        <div className='h-full pt-16 overflow-auto md:pt-0'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/play' element={<Play />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/watch' element={<Watch />} />
            <Route path='/socials' element={<Socials />} />
            <Route path='/account' element={<Account />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/help' element={<Help />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
