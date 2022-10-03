import React from "react";
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => state.tasks)
    return (
        <ul className="tasks-list">
            {todos.map((todo) => (
                <TodoItem id={todo.id} key={todo.id} title={todo.name} completed={todo.status} />
            ))}
        </ul>
    )
}

export default TodoList