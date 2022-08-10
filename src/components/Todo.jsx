import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Card } from './Card';
import styles from './Todo.module.css';


const posts = [
  {
    id: 1,
    taskText: 'texto alternativo de testes 1'
  },
  {
    id: 2,
    taskText: 'texto alternativo de testes 2'
  },
  {
    id: 3,
    taskText: 'texto alternativo de testes 3'
  }
];


export function Todo() {

  const [tasks, setTasks] = useState([''])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('')
  }

  function handleNewTaskChange() {

  }


  return (
    <>
      <div className={styles.inline}>

        <textarea
          className={styles.input}
          name='inputTask'
          placeholder='Escreva aqui sua tarefa'
          onChange={handleNewTaskChange}
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


      {posts.map(post => {
        return (
          <Card
            key={post.id}
            taskText={post.taskText}
            value={newTaskText}
          />
        )
      })}

    </>
  );
}