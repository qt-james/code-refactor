import React from 'react'
import { Button, Input } from "reactstrap";

const UTodoItemEdit = ({

    todo,
    editTodo,
    setEditTodo,
    onSave,

}) => {
    return (
        <div className="d-flex w-100" style={{ gap: "0.5rem" }}>
            <Input
                type="text"
                value={editTodo}
                onChange={(e) => setEditTodo(e.target.value)}
            />
            <Button color="success" onClick={() => onSave(todo.id, editTodo)}>
                Save
            </Button>
        </div>
    )
}

export default UTodoItemEdit