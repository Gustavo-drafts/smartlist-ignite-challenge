import React from 'react';
import styles from './Task.module.css';
import { PlusCircle } from 'phosphor-react';




export function Task() {

  
  return (
    <>
      <form
        className={styles.input}
      />

      <button
        className={styles.button}

      >
        Criar
        <PlusCircle
          className={styles.icon}
          size={32}
          color="#f7f7f7"
        />
      </button>
    </>
  )
}