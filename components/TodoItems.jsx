import React from "react";

export default function TodoItems(props) {
  function handlecli() {
    props.onDelete(props.id);
  }
  //   console.log(value);
  return (
    <div className="todo">
      <ul>
        <div className="todo_list">
          <li>{props.list}</li>
          <button type="submit" className="btn" onClick={handlecli}>
            Delete
          </button>
        </div>
      </ul>
    </div>
  );
}
