import React from "react";
import { TaskProps } from "../../types/todoTypes";

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div className={`task-item flex items-center justify-between p-4 bg-white rounded-lg shadow-md ${task.completed ? "opacity-50 line-through" : ""}`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          className="form-checkbox h-5 w-5 text-primaryColor"
        />
        <span className="text-gray-800">{task.text}</span>
      </div>
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700 transition duration-300"
      >
        Eliminar
      </button>
    </div>
  );
};

export default Task;
