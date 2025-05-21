import useTodoList from "../../hooks/useTodoList";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import "./TodoItem.css";

const TodoItem = ({ index, item }) => {
  const {
    editText,
    editingIndex,
    setEditText,
    handleStartEdit,
    handleSaveEdit,
    handleDeleteItem,
  } = useTodoList();

  return (
    <li className="d-flex justify-content-between align-items-center py-3 todo-item">
      {editingIndex === index ? (
        <EditTodo
          editText={editText}
          onEditText={setEditText}
          onSaveEdit={handleSaveEdit}
        />
      ) : (
        <Todo
          index={index}
          item={item}
          onStartEdit={handleStartEdit}
          onDelete={handleDeleteItem}
        />
      )}
    </li>
  );
};

export default TodoItem;
