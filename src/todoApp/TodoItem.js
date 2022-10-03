import React from "react";
import { useDispatch } from 'react-redux'
import { deleteTask } from "../reducers/taskSlice";

const TodoItem = ({ id, title }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(deleteTask({
            id
        }))
    }
    return (
        <li className="task-item">
            <div>
                {title}
            </div>
            <div>
                <button className="remove-task-button" onClick={handleClick}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem