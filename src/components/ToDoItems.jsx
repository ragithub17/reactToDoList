import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
const ToDoItems = ({ todoItems, OnDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={Math.random()}
          milk={item.name}
          date={item.date}
          OnDeleteClick={OnDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
