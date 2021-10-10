import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appoinment",
      day: "Feb 5th at 12:00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shopping",
      day: "Feb 5th at 2:00pm",
      reminder: true,
    },
  ]);

  // delete Task
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  // togglw Reminder
  const toggleReminder = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  
  //Add Task
  const addTask = (task) => {
    const len = tasks.length+1;
    const newTask = {len, ...task};
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To show"
      )}
    </div>
  );
}

export default App;
