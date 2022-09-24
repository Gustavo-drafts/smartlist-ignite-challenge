import { PlusCircle } from "phosphor-react";
import React from "react";
import { FormEvent, useState } from "react"
import Imagelogo from './assets/logo.svg';
import { Task } from "./components/Task";
import { AppContainer, AppFormContainer, AppTitle, TaskContainer, TasksCount } from "./styles/App";

export interface ITask {
  id: string,
  title: string,
  isCompleted: boolean
}


export default function App({ id }: ITask) {

  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState<ITask[]>([])

  const tasksQuantity = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()
    setTasks([...tasks, {
      id: crypto.randomUUID(),
      title: newTask,
      isCompleted: false
    }])
  }

  function handleDeleteTask(taskToDelete: string) {
    const updatedTasks = tasks.filter(task => task.id !== taskToDelete)

    setTasks(updatedTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      }
      return task
    })

    setTasks(newTasks)
  }


  return (
    <AppContainer>
      <AppTitle>
        <img src={Imagelogo} alt="todo-list" />
      </AppTitle>

      <AppFormContainer onSubmit={handleCreateNewTask}>
        <input
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={e => setNewTask(e.target.value)}
        />
        <button type='submit'>
          Criar
          <PlusCircle size={20} />
        </button>
      </AppFormContainer>

      <TaskContainer>
        <TasksCount>
          <h4>Tarefas Criadas <span>{tasksQuantity}</span></h4>
          <h4>Concluídas <span>{tasksQuantity !== 0 ? `${completedTasks} de ${tasksQuantity}` : 0}</span></h4>
        </TasksCount>

        {tasks.map(task => {
          return <Task key={id} task={task} onDelete={handleDeleteTask} onConplete={toggleTaskCompletedById} />
        })}

      </TaskContainer>
    </AppContainer>
  )
}
