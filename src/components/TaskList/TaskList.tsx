import React from "react";
import Task from "../Task/Task";
import { TaskListProps } from "../../types/todoTypes";

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  console.log(tasks);
  return (
    <div className="task-list w-full max-w-md space-y-4">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
