import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import useTodoList from "../../hooks/useTodoList";

const TodoList = () => {
  const { items } = useTodoList()

  return (
    <div>
      <TodoForm />
      <ul className="list-unstyled p-2">
        {items.map((item, index) => (
          <TodoItem key={index} index={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
