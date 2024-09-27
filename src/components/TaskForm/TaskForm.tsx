import { TaskFormProps } from "../../types/todoTypes";
import React, { useState } from "react";

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  // Estado para manejar el texto de la nueva tarea
  const [taskText, setTaskText] = useState("");

  // Función que se ejecuta cuando el formulario es enviado
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Previene la recarga de la página
    if (taskText.trim() !== "") {
      // Asegura que la tarea no esté vacía
      onAdd(taskText); // Llama a la función del componente padre (App) para agregar la tarea
      setTaskText(""); // Limpia el campo de texto
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6 w-full max-w-md">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryColor"
      />
      <button
        type="submit"
        className="bg-primaryColor text-white px-4 py-2 rounded-lg hover:bg-primaryColor transition duration-300"
      >
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
