import React from "react";
import { Button, Input } from "reactstrap";

import "./TodoItem.css";

const TodoItemView = ({
  item,
  index,
  isEditing,
  editText,
  onEditTextChange,
  onStartEdit,
  onSaveEdit,
  onDelete,
}) => {

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

export default TodoItemView;