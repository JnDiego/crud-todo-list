import React from "react";
import { TaskProps } from "../../types/todoTypes";

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={task.completed} />
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
