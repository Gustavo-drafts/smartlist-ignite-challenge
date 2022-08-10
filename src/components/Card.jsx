import { Trash } from 'phosphor-react';

import styles from './Card.module.css'

export function Card({ taskText, value }) {
  return (
    <div className={styles.header}>

      <div className={styles.label}>
        <label
          className={styles.labelCheck}>

        </label>
        <p className={styles.paragraph}>
          {taskText}
        </p>
        <label className={styles.labelTrash}>
          <Trash size={20}
          />
        </label>
      </div>
    </div>
  )
}