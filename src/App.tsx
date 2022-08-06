import logo from './assets/logo.svg';
import { Task } from './components/Task';
import { Empty } from './components/Empty';
import { Todo } from './components/Todo';
import { Counters } from './components/Counters';

import styles from './App.module.css';
import './global.css';





export default function App() {


  return (
    <>
      <div className={styles.header}>
        <img
          className={styles.logo}
          src={logo}
        />
      </div>

      <div className={styles.inline}>
        <Task />
      </div>

      <Counters />
      {/* <Empty /> */}
      <Todo />
    </>
  )
}
