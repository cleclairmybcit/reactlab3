import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Assignment({i, tasks, setTasks}: Tasks) {
  const task = tasks[i ?? 0];
  const del = () => {setTasks(tasks.filter((_, j) => j !== i))};
  const toggle = () => {
    setTasks(tasks.map((t, j) => (j === i ? { ...t, done: !t.done } : t)));
  };

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={toggle}>
        {task.done ? <div><BsFillCheckCircleFill/></div> : <div />}
      </button>
      <p className={task.done? styles.textCompleted:undefined}>{task.title}</p>
      <button className={styles.deleteButton} onClick={del}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
