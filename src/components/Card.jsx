import { Trash } from 'phosphor-react';

import styles from './Card.module.css'

export function Card({ value, handle }) {


  
  
  
  return (
    <div className={styles.header}>

      <div className={styles.label}>
        <label
          className={styles.labelCheck}>

        </label>
        <p className={styles.paragraph}>
          {value} 
        </p>
        <label className={styles.labelTrash}>
          <Trash
            onClick={handle}
            size={20}
          />
        </label>
      </div>
    </div>
  )
}