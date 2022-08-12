import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { Card } from './Card';
import styles from './Todo.module.css';




export function Todo() {

  const [task, setTask] = useState('');

  const [listTasks, setListTasks] = useState([]);

  function handleAddTask() {
    if (!task) return alert('Digite uma tarefa!');

    const newTask = {
      id: Math.random(),
      task: task,
    }

    setListTasks([...listTasks, newTask]);
    setTask('')
  }

  function removeTask(taskToRemove) {
    const tasksWithoutRemovedOne = listTasks.filter(task => {
      return task !== taskToRemove;
    })
    
    setTask([...tasksWithoutRemovedOne]);
    
    console.log(tasksWithoutRemovedOne);
  }



  return (
    <>
      <div className={styles.inline}>

        <label>

          <input
            value={task}
            className={styles.input}
            placeholder='Escreva aqui sua tarefa'
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <button
          onClick={handleAddTask}
          className={styles.button}
        >
          Criar
          <PlusCircle
            className={styles.icon}
            size={32}
            color="#f7f7f7"
          />
        </button>
      </div>


      {listTasks.map((task) => {
        return (
          <Card
            key={task.id}
            value={task.task}
            handle={removeTask}
          />
        )
      })
      }

    </>
  );
}