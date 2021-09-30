import React, { useRef } from "react";

type AddTodoProps = {
  //関数をプロップスとして渡した
  todoAdded: (todoText: string) => void;
};
const AddTodo: React.FC<AddTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.todoAdded(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD todo</button>
    </form>
  );
};

export default AddTodo;
