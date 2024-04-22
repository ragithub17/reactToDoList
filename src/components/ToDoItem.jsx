import { MdAutoDelete } from "react-icons/md";
function ToDoItem({ milk, date, OnDeleteClick }) {
  return (
    <div className="container">
      <div className="row row-margin">
        <div className="col-6 name">{milk}</div>
        <div className="col-4 items-container date">{date}</div>
        <div className="col-2">
          <button
            onClick={() => OnDeleteClick(milk)}
            type="button"
            className="btn btn-danger kg-button"
          >
            <MdAutoDelete className="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
