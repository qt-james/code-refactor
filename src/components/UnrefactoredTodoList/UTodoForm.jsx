import React from "react";
import { Button, Input } from "reactstrap";

const UTodoForm = ({ newTodo, setNewTodo, onAddTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo();
  };

  return (
    <form
      className="d-flex mb-3 mx-3"
      style={{ gap: "0.5rem" }}
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        value={newTodo}
        placeholder="Add a new todo"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button color="primary" type="submit">
        Add
      </Button>
    </form>
  );
};

export default UTodoForm;
