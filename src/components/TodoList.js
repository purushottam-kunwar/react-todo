import React from "react";
import TodoItems from "./TodoItems";

const TodoList = (props) => {
  console.log({ props });
  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {props.list.map((item, index) => {
          return (
            <div>
              <li key={item.id}>{item.name}</li>
              <TodoItems
                name={item.name}
                id={item.id}
                deleteChild={props.delete}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
