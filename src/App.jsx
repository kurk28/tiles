import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Tile } from './components/Tile/Tile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tile text={'text'}></Tile>
    </>
  );
}

export default App;
