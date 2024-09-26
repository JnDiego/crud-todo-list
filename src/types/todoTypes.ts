// Task Interface
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// Props for Task Component
export interface TaskProps {
  task: Task;
  onDelete: (id: number) => void;
}

// Props for TaskList Component
export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

// Props for TaskForm Component
export interface TaskFormProps {
  onAdd: (text: string) => void;
}
