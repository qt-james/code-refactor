import React from "react";
import { Button, Input } from "reactstrap";

import "./TodoItem.css";

const TodoItemEdit = ({
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
    );
};

export default TodoItemEdit;