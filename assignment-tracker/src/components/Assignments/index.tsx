import { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

export function Assignments({
    assignments,
    setAssignments
  }: {
    assignments: Assignment[];
    setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
  }) {
  const [completed, setCompleted] = useState(0);
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment) => (
          <Assignment key={assignment.id} assignment={assignment} assignments={assignments} setAssignments={setAssignments} completed={completed} setCompleted={setCompleted} />
        ))}
      </div>
    </section>
  );
}
