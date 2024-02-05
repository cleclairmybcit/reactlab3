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
    for (let j = 0; j < updatedAssignments.length; j++) {updatedAssignments[j].id = j;};
    setAssignments(updatedAssignments);
    setCompleted(completed);
  };
  
  const handleToggleCompletion = () => {
    assignment.completed = !assignment.completed;
    setCompleted(assignments.filter(assignment => assignment.completed === true).length);
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
