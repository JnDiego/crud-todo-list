// Task Interface
export interface Task {
  id: number;
  text: string;
}

// Props for Task Component
export interface TaskProps {
  task: Task;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

// Props for TaskList Component
export interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}

// Props for TaskForm Component
export interface TaskFormProps {
  onAdd: (text: string) => void;
}
