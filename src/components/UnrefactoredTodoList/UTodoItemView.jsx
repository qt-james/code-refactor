import React from "react";
import { Button, Input } from "reactstrap";

const UTodoItemView = ({ todo, onStartEdit, onDelete }) => {
  return (
    <>
      <span className="flex-grow-1">{todo.title}</span>
      <div className="d-flex" style={{ gap: "0.5rem" }}>
        <Button color="warning" onClick={() => onStartEdit(todo.id)}>
          Edit
        </Button>
        <Button color="danger" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </>
  );
};

export default UTodoItemView;
