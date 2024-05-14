import {DndContext} from '@dnd-kit/core';
import Board from './components/board';

function App() {
  return (
    <DndContext>
      <Board />
    </DndContext>
  );
}

export default App;
