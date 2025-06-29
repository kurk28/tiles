import styles from './Tile.module.css';
import { clsx } from 'clsx';
import { useState } from 'react';

export function Tile(props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={clsx(styles.tile, { [styles.opened]: isOpen })}
      onClick={() => setIsOpen(!isOpen)}
    >
      {props.text}
    </div>
  );
}
