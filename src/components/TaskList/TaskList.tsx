import React from "react";
import Task from "../Task/Task";
import { TaskListProps } from "../../types/todoTypes";

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="task-list w-full max-w-md space-y-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskList;
