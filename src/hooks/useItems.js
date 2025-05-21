import { useState } from "react";

const MOCK_DATA = [
  {
    id: 1,
    title: "Buy groceries",
  },
  {
    id: 2,
    title: "Create a new repo",
  },
  {
    id: 3,
    title: "Create a new app",
  },
];

export const useItems = () => {

  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  
  const [editTodoId, setEditTodoId] = useState(null);
  const [todoList, setTodoList] = useState(MOCK_DATA);

  const handleIsEdit = (id) => {
    setEditTodoId(id);
    setEditTodo(todoList.find((todo) => todo.id === id)?.title || "");
}

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodoList([...todoList, { id: todoList.length + 1, title: newTodo }]);
      setNewTodo("");
    }
  }

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  const handleEditTodo = (id, newTodo) => {
    console.log(id);
    console.log(newTodo);

    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, title: newTodo } : todo
      )
    );
    setEditTodo("");
    setEditTodoId(null);
  }

  return{
    newTodo,
    editTodo,
    editTodoId,
    todoList,
    setNewTodo,
    setEditTodo,
    setTodoList,
    handleIsEdit,
    handleAddTodo,
    handleDeleteTodo,
    handleEditTodo,
  };

}