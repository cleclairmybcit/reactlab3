import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Assignment({i, tasks, setTasks}: Tasks) {
  const done = tasks[i ?? 0].done;
  const title = tasks[i ?? 0].title;
  const del = () => {setTasks(tasks.filter((_, j) => j !== i))};
  const toggle = () => {
    setTasks(tasks.map((task, j) => (j === i ? { ...task, done: !task.done } : task)));
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={toggle}>
        {done ? <div><BsFillCheckCircleFill/></div> : <div />}
      </button>
      <p className={done ? styles.textCompleted : undefined}>{title}</p>
      <button className={styles.deleteButton} onClick={del}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
