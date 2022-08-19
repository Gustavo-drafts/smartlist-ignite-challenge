import React, { useState } from 'react';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { List } from './components/List';
import { Logo } from './components/Logo';
import "./global.css"



export default function App() {

  const [task, setTask] = useState<string>('')
  
  
  const [taskFormat, setTaskFormat] = useState<string[]>([])








function handleClick() {


  // Incluir item no array
  setTaskFormat((e) => [...e, task])


  // console.log(taskFormat);
  
}


  return (
    <>
      <header>
        <Logo />
      </header>


      <article>
        <Input
          onChange={(e) => setTask(e.target.value)}
          btn={handleClick}
        />
      </article>


      <main>
        <List 
          task={taskFormat}
        />
      </main>
    </>
  )
}
