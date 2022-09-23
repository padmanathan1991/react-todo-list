import React from "react";

export default function Form({ input, setInput, todos, setTodos }) {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (input !== "" && input.trim()) {
      setTodos([...todos, input]);
      localStorage.setItem("todosName", JSON.stringify([...todos, input]));

    }
    setInput("");
  };

  const HandleEnter = (e) => {
    if (e.key === "Enter") {
      onFormSubmit();
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="flex items-center space-x-4">
        <input
          autoFocus
          className="border-none outline-none px-4 py-2 text-base rounded-md bg-zinc-600 text-zinc-300 w-full flex-1"
          onChange={onInputChange}
          value={input}
          onKeyDown={(e) => HandleEnter(e)}
        />
        <button className="border-none outline-none px-4 py-2 bg-red-500 text-sm tracking-wider rounded-md text-white font-medium duration-100 hover:bg-red-600">
          Add Todo
        </button>
      </div>
    </form>
  );
}
