import { Trash } from 'phosphor-react';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Todo.module.css';



export function Todo() {

  const [tasks, setTasks] = useState(['Tarefa estado'])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('')


    console.log(newTaskText);
  }

  return (
    <>
      <div className={styles.inline}>

        <textarea
          className={styles.input}
          name='inputTask'
          placeholder='Escreva aqui sua tarefa'
          required
        />
        <button
          className={styles.button}
          onClick={handleCreateNewTask}
        >
          Criar
          <PlusCircle
            className={styles.icon}
            size={32}
            color="#f7f7f7"
          />
        </button>
      </div>

      <div className={styles.header}>
        <div className={styles.label}>

          <label
            className={styles.labelCheck}>

          </label>
          <p className={styles.paragraph}>
            {tasks}
          </p>
          <label className={styles.labelTrash}>
            <Trash size={20} />
          </label>

        </div>
      </div>
    </>
  );
}