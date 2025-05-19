import React from "react";
import { Button, Input } from "reactstrap";

const UTodoItem = ({
    todo,
    index,
    isEditing,
    editTodo,
    setEditTodo,
    onStartEdit,
    onSave={handleEditTodo}, 
    onDelete,
}) => {

    return (
        <li className="d-flex justify-content-between align-items-center py-3 todo-item">
            {isEditing ? (
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
            ) : (
                <>
                    <span className="flex-grow-1">{todo.title}</span>
                    <div className="d-flex" style={{ gap: "0.5rem" }}>
                        <Button color="warning" onClick={() => onStartEdit(todo.id)}>
                            Edit
                        </Button>
                        <Button color="danger" onClick={() => onDelete(todo.id)}>
                            Delete
                        </Button>
                    </div>
                </>
            )}
        </li>
    );
};

export default UTodoItem;