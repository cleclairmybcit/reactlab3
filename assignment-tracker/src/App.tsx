import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [myAssignments, setAssignments] = useState<Assignment[]>([]);
  return (
    <>
      <Header
        assignments={myAssignments}
        setAssignments={setAssignments}
      />
      <Assignments 
        assignments={myAssignments}
        setAssignments={setAssignments}
      />
    </>
  );
}

export default App;
