import React from "react";
import { useState } from "react";
import style from "./to-do.module.css";
import To_do_task from "../To_do_task/To_do_task";

function To_do() {
  const [input, setInput] = useState("");

  const [item, setItem] = useState([]);

  const handel = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    setItem((oldItem) => {
      return [...oldItem, input];
    });

    setInput("");
  };

  const deleteItem = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrElm, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className={style.toDo_container}>
        <h2 className={style.heading}>TO DO APP</h2>
        <div className={style.toDo}>
          <div className={style.inputBox}>
            <input
              onChange={handel}
              className={style.input}
              type="text"
              placeholder="Enter Something"
              value={input}
            />
            <h2 onClick={addTask} className={style.addItem}>
              +
            </h2>
          </div>
          <p className={style.all_task}>All Tasks</p>
          <div className={style.task_body}>
            {item.map((elm, index) => {
              return (
                <To_do_task
                  text={elm}
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default To_do;
