import { Button, Input } from "reactstrap";
import useTodoList from "../../hooks/useTodoList";

const TodoForm = () => {
  const { newItem, setNewItem, handleAddItem } = useTodoList();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  return (
    <form
      className="d-flex mb-1"
      onSubmit={handleSubmit}
      style={{ gap: "0.5rem" }}
    >
      <Input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <Button type="submit" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
