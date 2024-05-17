import { useRef, useState } from "react";
import styles from "./ToDoName.module.css";
import { MdAddBox } from "react-icons/md";

function ToDoName({ onNewItem }) {
  const toDoElementName = useRef();
  const toDoElementDate = useRef();

  const handleOnAddButton = (event) => {
    event.preventDefault();
    const itemsName = toDoElementName.current.value;
    const itemsDate = toDoElementDate.current.value;
    toDoElementName.current.value = "";
    toDoElementDate.current.valu = "";
    onNewItem(itemsName, itemsDate);
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleOnAddButton} className="row row-margin">
        <div className="col-6">
          <input
            className={styles.todo}
            type="text"
            ref={toDoElementName}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input className={styles.todo} type="date" ref={toDoElementDate} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <MdAddBox className="add" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ToDoName;
