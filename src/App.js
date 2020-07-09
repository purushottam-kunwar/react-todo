import React, { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: "1",
      name: "test1",
    },
    {
      id: "2",
      name: "test2",
    },
    {
      id: "3",
      name: "test3",
    },
  ]);

  const removeHandler = (id) => {
    console.log(id);
    // const newTodoList = todoList.filter((todo) => id !== todo.id);
    // setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <TodoList list={todoList} delete={removeHandler} />
    </div>
  );
}

export default App;
