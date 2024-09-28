import React, { useRef, useState, useEffect } from "react";
import { TaskProps } from "../../types/todoTypes";
import { Pencil } from "../../assets/Pencil";
import { Close } from "../../assets/Close";

const Task: React.FC<TaskProps> = ({ task, onDelete, onUpdate }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedValue, setUpdatedValue] = useState(task.text);
  const updateInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditMode) {
      updateInput?.current?.focus();
    }
  }, [isEditMode]);

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setUpdatedValue(e.currentTarget.value);
  };

  const handleUpdate = () => {
    setIsEditMode(false);
    onUpdate(task.id, updatedValue);
  };

  return (
    <div
      className={`task-item flex items-center justify-between p-4 bg-white rounded-lg shadow-md }`}
    >
      <div className="flex items-center gap-3">
        <button
          className={`${"text-secondaryColor"} hover:text-primaryColor-dark transition duration-300`}
          onClick={handleEdit}
        >
          {isEditMode ? <Close /> : <Pencil />}
        </button>
        {isEditMode ? (
          <input
            type="text"
            value={updatedValue}
            onChange={onChangeInput}
            ref={updateInput}
          />
        ) : (
          <span className="text-gray-800">{task.text}</span>
        )}
      </div>
      <button
        onClick={() => (isEditMode ? handleUpdate() : onDelete(task.id))}
        className={`${
          isEditMode
            ? "text-green-500 hover:text-green-700"
            : "text-red-500 hover:text-red-700"
        } transition duration-300`}
      >
        {isEditMode ? "Guardar" : "Eliminar"}
      </button>
    </div>
  );
};

export default Task;
