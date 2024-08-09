import React from "react";

export default function Input(props) {
  return (
    <div className="Todo_items">
      <input
        type="text"
        placeholder="Here you add..!"
        name="myTodo"
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit" className="btn" onClick={props.onCli}>
        Add
      </button>
    </div>
  );
}
