import styles from './Tile.module.css';
import { clsx } from 'clsx';
import { useEffect, useRef } from 'react';
import { TILE_STATUS } from './Tile.const';

export function Tile({ text, status, onClick }) {
  const tileRef = useRef(null);

  useEffect(() => {
    const node = tileRef.current;
    if (node) {
      const handler = function (event) {
        if (event.animationName === styles.rotateTile) {
          node.classList.remove(styles.rotateTile);
        }
      };
      node.addEventListener('animationend', handler);
      return () => {
        node.addEventListener('animationend', handler);
      };
    }
  }, []);

  function onClickHandler() {
    const node = tileRef.current;
    if (node) {
      node.classList.add(styles.rotateTile);
    }
    onClick();
  }

  return (
    <>
      <div
        ref={tileRef}
        className={clsx(styles.tile, {
          [styles.default]: status === TILE_STATUS.default,
          [styles.success]: status === TILE_STATUS.success,
          [styles.error]: status === TILE_STATUS.error,
        })}
        onClick={onClickHandler}
      >
        {text}
      </div>
    </>
  );
}
