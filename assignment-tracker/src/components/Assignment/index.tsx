import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";

export function Assignment({
  assignment,
  assignments,
  setAssignments,
  completed,
  setCompleted
}: {
    assignment: Assignment;
    assignments: Assignment[];
    setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
    completed: number;
    setCompleted: React.Dispatch<React.SetStateAction<number>>;
}) {

  const handleDelete = () => {
    const updatedAssignments = assignments.filter((a) => a.id !== assignment.id);
    setAssignments(updatedAssignments);
  };
  
  const handleToggleCompletion = () => {
    const updatedCompletedCount = assignment.completed ? completed - 1 : completed + 1;
    setCompleted(updatedCompletedCount);
    assignment.completed = !assignment.completed;
  };

  return (
    <div className={styles.assignment}>
      <button 
        className={styles.checkContainer}
        onClick={handleToggleCompletion}
      >
        {assignment.completed ? <div><BsFillCheckCircleFill/></div> : <div />}
      </button>
      <p className={assignment.completed ? styles.textCompleted : ""}>
        {assignment.title}
      </p>
      <button 
        className={styles.deleteButton}
        onClick={handleDelete}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
