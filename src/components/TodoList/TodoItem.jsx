import React from "react";
import { Button, Input } from "reactstrap";
import "./TodoItem.css";
import TodoItemEdit from "./TodoItemEdit";
import TodoItemView from "./TodoItemView";

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
        <TodoItemEdit
          editText={editText}
          onEditTextChange={onEditTextChange}
          onSaveEdit={onSaveEdit}
        />
      ) : (
        <TodoItemView
          item={item}
          index={index}
          onStartEdit={onStartEdit}
          onDelete={onDelete}

        />
      )}
    </li>
  );
};

export default TodoItem;
