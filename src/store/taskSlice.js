import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({...action.payload, id: Date.now(), completed: false })
        }
    }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer