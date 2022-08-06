import styles from './Task.module.css';
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent } from 'react';


export function Task() {


  function handleCreateNewTask(event: ChangeEvent) {
    event.preventDefault();
    console.log("foi!");   
  }

  return (
    <>
      <input
        className={styles.input}
        type="text"
      />
      <button
        className={styles.button}
        onClick={handleCreateNewTask}>
        Criar
        <PlusCircle
          className={styles.icon}
          size={32}
          color="#f7f7f7" />
      </button>
    </>
  )
}