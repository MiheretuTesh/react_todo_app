const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': ""}`} onDoubleClick={()=> onToggle(task.id)}>
      <h3>{task.text} <p style={{color:"red", fontWeight: 700, cursor: "pointer"}} onClick={()=> onDelete(task.id)}>x</p></h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
