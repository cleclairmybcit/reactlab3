import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <>
      <Header tasks={tasks} setTasks={setTasks} />
      <Assignments tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
