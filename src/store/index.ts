import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todo',
    initialState: ['Fazer café', 'Estudar React', 'Estudar Redux', 'Estudar Redux Toolkit'],
    reducers: {},
})

export const store = configureStore({
    reducer: {
        todo: todosSlice.reducer,
    }
})