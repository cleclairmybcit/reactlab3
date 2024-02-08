interface Tasks {
    i?: number;
    tasks: Task[]; 
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}
