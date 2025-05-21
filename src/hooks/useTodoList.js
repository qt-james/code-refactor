import { useContext } from "react";
import {TodoContext} from "../context/TodoContext"

const useTodoList = () => {
    return useContext(TodoContext);
}

export default useTodoList;