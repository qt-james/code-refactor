import { Button } from "reactstrap";

const Todo = ({ item, onStartEdit, onDelete, index }) => {
  return (
    <>
      <span className="flex-grow-1">{item}</span>
      <div className="d-flex" style={{ gap: "0.5rem" }}>
        <Button color="warning" onClick={() => onStartEdit(index)}>
          Edit
        </Button>
        <Button color="danger" onClick={() => onDelete(index)}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default Todo;
