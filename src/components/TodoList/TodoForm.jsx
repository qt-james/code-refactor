import React from "react";
import { Button, Input } from "reactstrap";

const TodoForm = ({ newItem, onNewItemChange, onAddItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem();
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
        onChange={(e) => onNewItemChange(e.target.value)}
        placeholder="Add new item"
      />
      <Button type="submit" color="primary">
        Add
      </Button>
    </form>
  );
};

export default TodoForm;
