import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";

export function Header({
    assignments, 
    setAssignments
  }: {
    assignments: Assignment[]; 
    setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
  }) {
  
  const [inputAssignment, setInputAssignment] = useState('');
  const handleInputChange = (e: any) => {
    setInputAssignment(e.target.value);  
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputAssignment.trim()) {
      const newAssignment: Assignment = {
        id: assignments.length + 1,
        title: inputAssignment,
        completed: false,
      };

      setAssignments([...assignments, newAssignment]);
      setInputAssignment('');
    }
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputAssignment}
          onChange={handleInputChange}
          placeholder="Add a new assignment"
        />
        <button 
          type="submit" 
          disabled={!inputAssignment.trim()}
        >
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
