import { Trash } from 'phosphor-react';
import styles from './Todo.module.css';


export function Todo() {
  
  return (
    <div className={styles.header}>
      <div className={styles.task}>
        <input
          type="checkbox"
          className={styles.input}
        />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit.

        <Trash size={32} className={styles.trash} />
      </div>
    </div>
  );
}