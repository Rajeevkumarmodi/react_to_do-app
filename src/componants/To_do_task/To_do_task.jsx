import React from "react";
import style from "./to_do_task.module.css";

function To_do_task(props) {
  return (
    <>
      <div className={style.task}>
        <p onClick={() => props.onSelect(props.id)} className={style.deleteBtn}>
          x
        </p>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default To_do_task;
