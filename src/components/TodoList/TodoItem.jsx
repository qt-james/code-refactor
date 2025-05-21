import React from "react";
import { Button, Input } from "reactstrap";

import "./TodoItem.css";

const TodoItem = ({
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
    <li className="d-flex justify-content-between align-items-center py-3 todo-item">
      {isEditing ? (
        <div className="d-flex w-100" style={{ gap: "0.5rem" }}>
          <Input
            type="text"
            value={editText}
            onChange={(e) => onEditTextChange(e.target.value)}
          />
          <Button color="success" onClick={onSaveEdit}>
            Save
          </Button>
        </div>
      ) : (
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
      )}
    </li>
  );
};

export default TodoItem;