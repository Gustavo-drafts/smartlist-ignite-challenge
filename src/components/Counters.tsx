import styles from './Counters.module.css';


export function Counters() {
  return (
    <div className={styles.header}>

      <div className={styles.created}>
        Tarefas criadas
        <label
          className={styles.count}>
          0
        </label>
      </div>
      <div className={styles.done}>
        Concluídas
        <label
          className={styles.count}>
          0
        </label>
      </div>
    </div>
  );
}
