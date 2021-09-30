import React, { useState } from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

interface ToDo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);

  const todoAdd = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  return (
    <div className="App">
      <AddTodo todoAdded={todoAdd} />
      <Todo items={todos} />
    </div>
  );
};

export default App;
