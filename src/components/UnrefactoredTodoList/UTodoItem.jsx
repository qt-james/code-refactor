import React from "react";
import { Button, Input } from "reactstrap";
import UTodoItemView from "./UTodoItemView";
import UTodoItemEdit from "./UTodoItemEdit";

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
        <li className="d-flex justify-content-between align-items-center py-3 todo-item mx-3">
            {isEditing ? (
                <UTodoItemEdit
                    todo={todo}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    onSave={onSave}
                />
            ) : (
                <UTodoItemView
                    todo={todo}
                    onStartEdit={onStartEdit}
                    onDelete={onDelete}
                />
            )}
        </li>
    );
};

export default UTodoItem;