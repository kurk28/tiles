import { useState } from 'react';
import styles from './App.module.css';
import { Tile } from './components/Tile/Tile';
import { Button } from './components/Button/Button';
import { TILE_STATUS } from './components/Tile/Tile.const';

function App() {
  const data = [0, 1, 2, 3];
  const [text, setText] = useState(data[0]);
  const [tileStatus, setTileStatus] = useState(TILE_STATUS.default);

  return (
    <div className={styles.app}>
      <Tile
        head={'text'}
        tail={'text 2'}
        onClick={() => setText(data[text + 1])}
        status={tileStatus}
        text={text}
      ></Tile>
      <div className={styles.buttonWrapper}>
        <Button
          name="Correct"
          onClick={() => {
            setTileStatus(TILE_STATUS.success);
          }}
        />
        <Button
          name="False"
          onClick={() => {
            setTileStatus(TILE_STATUS.error);
          }}
        />
      </div>
    </div>
  );
}

export default App;
