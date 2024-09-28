import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import TaskForm from "./components/TaskForm/TaskForm";
import { Task } from ".//types/todoTypes";

function App() {
  // Estado para gestionar las tareas. Comienza con un array vacío.
  const [tasks, setTasks] = useState<Task[]>([]);

  // Función para agregar nuevas tareas
  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: tasks.length + 1, // Cada tarea tiene un id único
      text: taskText,
    }; // Cada tarea tiene un texto y un estado de completada
    setTasks([...tasks, newTask]); // Agrega la nueva tarea al estado
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId); // Filtra las tareas eliminando la seleccionada
    setTasks(newTasks); // Actualiza el estado con las tareas restantes
  };

  // Función para actualizar una tarea
  const updateTask = (taskId: number, newText: string): void => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (updatedTask) {
      updatedTask.text = newText;
      setTasks([...tasks]);
    }
  };

  return (
    <div className="App bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-primaryColor mb-6">
        Lista de Tareas
      </h1>
      {/* Renderiza el formulario para agregar tareas */}
      <TaskForm onAdd={addTask} />

      {/* Renderiza la lista de tareas, pasándole las tareas y la función para eliminarlas */}
      <TaskList tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
    </div>
  );
}

export default App;
