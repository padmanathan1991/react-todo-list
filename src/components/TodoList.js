import React, { useState } from "react";
import {
  AiOutlineCheck,
  AiFillEdit,
  AiFillDelete,
  AiOutlineClose,
} from "react-icons/ai";

export default function TodoList({
  input,
  setInput,
  todos,
  setTodos,
  handleEditTodoName,
  todoIndex,
  setTodoIndex,
}) {
  const [editTodoName, setEditTodoName] = useState("");

  const handleDeleteTodo = (todo) => {
    setTodos(todos.filter((selectedTodo, id) => selectedTodo !== todo));
    localStorage.setItem(
      "todosName",
      JSON.stringify(todos.filter((selectedTodo) => selectedTodo !== todo))
    );
  };

  const onEditField = (index) => {
    setTodoIndex(index);
  };

  const onInputChange = (e) => {
    setEditTodoName(e.target.value);
  };

  return (
    <>
      {todos?.map((todo, index) => {
        return (
          <div
            key={index}
            className="px-4 py-2 bg-zinc-500 rounded-lg flex justify-between items-center"
          >
            {todoIndex === index ? (
              <div className="flex items-center max-w-xs w-full bg-zinc-200 rounded-md py-1 px-2">
                <input
                  autoFocus
                  className="w-full bg-transparent border-none outline-none"
                  onChange={onInputChange}
                />
                <div className="ml-3 flex items-center space-x-1.5">
                  <figure
                    onClick={() =>
                      handleEditTodoName(editTodoName, setTodoIndex, index)
                    }
                    className="w-5 h-5 flex items-center justify-center bg-zinc-800 rounded-full group cursor-pointer duration-150"
                  >
                    <AiOutlineCheck className="text-zinc-200 w-3 h-3 group-hover:text-red-500" />
                  </figure>
                  <figure
                    onClick={() => setTodoIndex(null)}
                    className="w-5 h-5 flex items-center justify-center bg-zinc-800 rounded-full group cursor-pointer duration-150"
                  >
                    <AiOutlineClose className="text-zinc-200 w-3 h-3 group-hover:text-red-500" />
                  </figure>
                </div>
              </div>
            ) : (
              <p className="text-base leading-4 text-zinc-100">{todo}</p>
            )}

            <div className="flex items-center space-x-3">
              <figure className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-md group cursor-pointer duration-150">
                <AiFillEdit
                  onClick={() => onEditField(index)}
                  className="text-zinc-200 w-5 h-5 group-hover:text-red-500"
                />
              </figure>
              <figure
                onClick={() => handleDeleteTodo(todo)}
                className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-md group cursor-pointer duration-150"
              >
                <AiFillDelete className="text-zinc-200 w-5 h-5 group-hover:text-red-500" />
              </figure>
            </div>
          </div>
        );
      })}
    </>
  );
}
