import { Trash } from 'phosphor-react';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Todo.module.css';


const taskList = [
  {
    id: 1,
    content: 'primeira tarefa'
  },
  {
    id: 2,
    content: 'segunda tarefa'
  },
  {
    id: 3,
    content: 'terceira tarefa'
  },
]

export function Todo() {

  const [taskList, setTaskList] = useState([])
  const [input, setInput] = useState([])

  function handleCreateNewTask() {
    event.preventDefault()

    setTaskList([...taskList, taskList.length + 1])
    setInput([...input, input.length + 1])
  }

  return (
    <>
      <div className={styles.inline}>
        <input
          placeholder='Escreva aqui sua tarefa'
          className={styles.input}
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
        {}
        <div className={styles.label}>
          <label
            className={styles.labelCheck}
          />
          <p className={styles.paragraph}>
            {taskList}
          </p>
          <label className={styles.labelTrash}>
            <Trash size={20} />
          </label>
        </div>
      </div>
    </>
  );
}