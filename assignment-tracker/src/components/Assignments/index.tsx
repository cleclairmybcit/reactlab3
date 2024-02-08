import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({tasks, setTasks}: Tasks) {
  const done = tasks.filter(task => task.done === true).length;
  const total = tasks.length;
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div><p>Created Assignments</p><span>{total}</span></div>
        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{done} of {total}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((_task, i) => (
          <Assignment key={i} i={i} tasks={tasks} setTasks={setTasks}/>
        ))}
      </div>
    </section>
  );
}
