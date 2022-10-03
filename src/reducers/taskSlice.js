import { createSlice } from '@reduxjs/toolkit'

export const tasksSlicce = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                name: action.payload.task   
            }
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});

export const { addTask, deleteTask } = tasksSlicce.actions;

export default tasksSlicce.reducer