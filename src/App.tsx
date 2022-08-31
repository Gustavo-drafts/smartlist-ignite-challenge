import React, { useState } from 'react';
import Logo from './assets/logo.svg';
import "./styles/global.css"
import './styles/App.css'

export default function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputContent, setInputContent] = useState('')

  function validateTask() {
    if (inputContent === '') {
      return alert('Invalid task')
    }
  }

  function handleSubmitTask() {
    inputContent ? 
    setTasks([...tasks, inputContent]) : validateTask()
    setInputContent('') 
  }

  function handleDeleteTask(value: string) {
    setTasks(tasks.filter((task) => task !== value))
  }

  return (
    <>
      <div className='header'>
        <img src={Logo} />
      </div>

      <div className='container-input'>
        <input
          type='text'
          onChange={(e) => setInputContent(e.target.value)}
          
        />
        <button
          className='btn-vai'
          onClick={handleSubmitTask} >
          Vai
        </button>
      </div>

      <div className='list-group'>

        {tasks.map((task, index) => {
          return (
            <ul key={index}>
              <li>
                <div className='label-text'>
                  {task}
                  <label onClick={() => handleDeleteTask(task)} >Remove All</label>
                </div>
              </li>
            </ul>
          )
        })}
      </div>
    </>
  )
}
