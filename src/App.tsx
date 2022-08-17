import React from 'react';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import "./global.css"

export default function App() {


  return (
    <>
      <header>
        <Logo />
      </header>
      <article>
        <Input />
      </article>
      <main>
        <Counter />
      </main>
    </>
  )
}
