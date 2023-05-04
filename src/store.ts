import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from "./features/tasks/tasksSlice"
import configReducer from "./features/tasks/configSlice"
import breaksReducer from "./features/tasks/breaksSlice"
import statReducer from "./features/tasks/statSlice"

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        config: configReducer,
        breaks: breaksReducer,
        stat: statReducer
    },
    preloadedState: loadFromLocalStorage()
})

function saveToLocalStorage(state: RootState) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("persistentState", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("persistentState");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

store.subscribe(() => saveToLocalStorage(store.getState()));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
