import React from "react";

const TodoItems = (props) => {
  const deleteFunction = (e) => {
    props.deleteChild(props.id);
  };

  return (
    <div>
      <span key={props.id}>{props.name}</span>
      <button type="button" onClick={deleteFunction}>
        Delete
      </button>
    </div>
  );
};

export default TodoItems;
