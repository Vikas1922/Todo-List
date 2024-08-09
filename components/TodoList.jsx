import React from "react";
import Input from "./Input";
import TodoItems from "./TodoItems";

export default function TodoList(props) {
  //   console.log(props.valList);
  let value = props.valList;
  return (
    <div className="container">
      <Input
        onChange={props.onChange}
        value={props.valInput}
        onCli={props.btnclick}
      />
      <div className="todo">
        <ul>
          {value.map((listItem, index) => {
            return (
              <TodoItems
                key={index}
                id={index}
                list={listItem}
                onDelete={props.delClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
