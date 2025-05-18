import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, Col, Input, Row } from "reactstrap";

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

function Unrefactored() {
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  const [todoList, setTodoList] = useState(MOCK_DATA);

  function handleIsEdit(id) {
    setEditTodoId(id);
    setEditTodo(todoList.find((todo) => todo.id === id).title);
  }

  function handleAddTodo() {
    if (newTodo.trim()) {
      setTodoList([...todoList, { id: todoList.length + 1, title: newTodo }]);
      setNewTodo("");
    }
  }

  function handleDeleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleEditTodo(id, newTodo) {
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

  return (
    <Row className="justify-content-center">
      <Col className="col-md-8">
        <Card>
          <CardBody>
            <CardTitle tag="h3" className="display-6 mb-3">
              Todo List
            </CardTitle>

            <div className="d-flex mb-3" style={{ gap: "0.5rem" }}>
              <Input
                type="text"
                value={newTodo}
                placeholder="Add a new todo"
                onChange={(e) => setNewTodo(e.target.value)}
              />
              <Button color="primary" onClick={handleAddTodo}>
                Add
              </Button>
            </div>

            <div>
              {todoList.map((todo, idx) => {
                const isEdit = editTodoId === todo.id;

                return (
                  <div
                    key={idx}
                    className="d-flex justify-content-between py-2"
                  >
                    {isEdit ? (
                      <div
                        className="d-flex align-items-center"
                        style={{ gap: "0.5rem" }}
                      >
                        <Input
                          type="text"
                          value={editTodo}
                          onChange={(e) => setEditTodo(e.target.value)}
                        />
                        <Button
                          color="warning"
                          onClick={() => handleEditTodo(todo.id, editTodo)}
                        >
                          Save
                        </Button>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-between align-items-center flex-grow-1">
                        <h6 className="flex-grow-1">{todo.title}</h6>

                        <div className="d-flex" style={{ gap: "0.5rem" }}>
                          <Button
                            color="warning"
                            onClick={() => handleIsEdit(todo.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            color="danger"
                            onClick={() => handleDeleteTodo(todo.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default Unrefactored;
