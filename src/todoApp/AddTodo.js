import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../reducers/taskSlice'

const AddTodo = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();

        if(value.trim().length === 0) {
            alert('Enter valid Task');
            setValue('');
            return
        }

        dispatch(addTask({
            task: value
        }));

        setValue('');
        e.target.focus()
    }

    const handleChange = (e) => setValue(e.target.value)
    return (
        <div className="add-todo">
            <input type="text"
                className="task-input" 
                placeholder="Add task"
                value={value}
                onChange={handleChange}
            />
            <button className="task-button" onClick={onSubmit}>
                Save
            </button>

        </div>
    )
}

export default AddTodo