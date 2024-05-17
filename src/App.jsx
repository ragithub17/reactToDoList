import AppName from "./components/AppName";
import ToDoName from "./components/ToDoName";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import Containers from "./components/Containers";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [todoItems, setItems] = useState([]);

  // const handleNewItem = (itemName, itemDate) => {
  //   setItems((currValue) => {
  //     const NewItemsTodo = [...currValue, { name: itemName, date: itemDate }];
  //     return NewItemsTodo;
  //   });
  // };

  const handleNewItem = (itemName, itemDate) => {
    setItems((currValue) => [...currValue, { name: itemName, date: itemDate }]);
  };

  const handleOnDelete = (ItemName) => {
    const filtereditems = todoItems.filter((obj) => obj.name !== ItemName);
    setItems(filtereditems);
  };

  return (
    <Containers>
      <center className="todo-container">
        <AppName></AppName>
        <ToDoName onNewItem={handleNewItem}></ToDoName>
        <Error items={todoItems}></Error>
        <ToDoItems
          OnDeleteClick={handleOnDelete}
          todoItems={todoItems}
        ></ToDoItems>
      </center>
    </Containers>
  );
}

export default App;
