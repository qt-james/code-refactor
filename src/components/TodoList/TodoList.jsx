import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useTodo } from "../../hooks/useTodo";

const TodoList = () => {
  const {
    items,
    newItem,
    editingIndex,
    editText,
    handleAddItem,
    handleDeleteItem,
    handleStartEdit,
    handleSaveEdit,
    handleNewItemChange,
    handleEditTextChange,
  } = useTodo();

  return (
    <div>
      <TodoForm
        newItem={newItem}
        onNewItemChange={handleNewItemChange}
        onAddItem={handleAddItem}
      />

      <ul className="list-unstyled p-2">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            isEditing={editingIndex === index}
            editText={editText}
            onEditTextChange={handleEditTextChange}
            onStartEdit={handleStartEdit}
            onSaveEdit={handleSaveEdit}
            onDelete={handleDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
