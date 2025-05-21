import React from "react";
import UTodoItem from "./UTodoItem";
import UTodoForm from "./UTodoForm";
import { useItems } from "/src/hooks/useItems.js";

const UTodoList = () => {
  const {
    newTodo,
    editTodo,
    editTodoId,
    todoList,
    setNewTodo,
    setEditTodo,
    setEditTodoId,
    handleIsEdit,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
  } = useItems();

  return (
    <div>
      <UTodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        onAddTodo={handleAddTodo}
      />

      <ul className="list-unstyled p-2">
        {todoList.map((todo, index) => (
          <UTodoItem
            key={todo.id}
            todo={todo}
            index={index}
            isEditing={editTodoId === todo.id}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            onStartEdit={() => handleIsEdit(todo.id)}
            onSave={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default UTodoList;
