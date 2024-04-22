import { useState } from "react";
import styles from "./ToDoName.module.css";
import { MdAddBox } from "react-icons/md";

function ToDoName({ onNewItem }) {
  const [itemsName, setItemsname] = useState("");
  const [itemsDate, setItemsDate] = useState("");

  const handleNameOnChange = (event) => {
    setItemsname(event.target.value);
  };

  const handleDateOnChange = (event) => {
    setItemsDate(event.target.value);
  };

  const handleOnAddButton = (event) => {
    event.preventDefault();
    onNewItem(itemsName, itemsDate);
    setItemsname("");
    setItemsDate("");
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleOnAddButton} className="row row-margin">
        <div className="col-6">
          <input
            className={styles.todo}
            type="text"
            placeholder="Enter Todo Here"
            value={itemsName}
            onChange={handleNameOnChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.todo}
            type="date"
            value={itemsDate}
            onChange={handleDateOnChange}
          />
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
