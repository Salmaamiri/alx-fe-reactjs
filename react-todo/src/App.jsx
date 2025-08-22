import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">React Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
