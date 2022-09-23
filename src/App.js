import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

export default function () {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoIndex, setTodoIndex] = useState(null);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todosName"))) {
      const data = JSON.parse(localStorage.getItem("todosName"));
      setTodos(data);
    }
  }, []);

  const handleEditTodoName = (editTodoName, setTodoIndex, index) => {
    if (editTodoName !== "") {
      const updatedTodoList = todos.map((todo, todoIndex) => {
        if (todoIndex === index) {
          return editTodoName;
        } else {
          return todo;
        }
      });
      setTodos(updatedTodoList);
      setTodoIndex(null)
    }
  };

  return (
    <div className="min-w-screen h-screen">
      <div className="w-full h-full flex items-center justify-center bg-zinc-700">
        <div className="max-w-xl w-full">
          <div className="w-full bg-zinc-800 mb-6 p-4 rounded-lg">
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
            />
          </div>
          <div className="w-full bg-zinc-800 h-96 p-4 rounded-lg space-y-4 overflow-scroll">
            {todos?.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-zinc-200 text-2xl font-bold tracking-wider">
                  No Todo !!!
                </p>
              </div>
            ) : (
              <TodoList
                handleEditTodoName={handleEditTodoName}
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                todoIndex={todoIndex}
                setTodoIndex={setTodoIndex}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
