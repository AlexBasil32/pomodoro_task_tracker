import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";

export type TTask = {
    uid: string,
    name: string,
    pomodoro_cnt: number,
    pomodoro_finished: number,
    is_edit: boolean
}

interface ITasksState {
    items: TTask[]
}

const initialTasksState: ITasksState = {
    items: []
}

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        addTask: (state, action: PayloadAction<TTask>) => {
            state.items.push(action.payload);
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            let uid = action.payload;

            state.items = state.items.filter((item) => {
                return item.uid !== uid;
            });
        },
        increaseTask: (state, action: PayloadAction<string>) => {
            let uid = action.payload;
            let findTask = state.items.find(task => task.uid === uid);

            if (findTask) {
                findTask.pomodoro_cnt++;
            }
        },
        finishPomodoro: (state, action: PayloadAction<string>) => {
            let uid = action.payload;
            let findTask = state.items.find(task => task.uid === uid);

            if (findTask) {
                findTask.pomodoro_finished++;
            }
        },
        decreaseTask: (state, action: PayloadAction<string>) => {
            let uid = action.payload;
            let findTask = state.items.find(task => task.uid === uid);

            if (findTask && findTask.pomodoro_cnt > 1) {
                findTask.pomodoro_cnt--;
            }
        },
        editTask: (state, action: PayloadAction<string>) => {
            let uid = action.payload;
            let findTask = state.items.find(task => task.uid === uid);

            if (findTask) {
                findTask.is_edit = true;
            }
        },
        renameTask: (state, action: PayloadAction<{ uid: string, name: string }>) => {
            let {uid, name} = action.payload;
            let findTask = state.items.find(task => task.uid === uid);

            if (findTask) {
                findTask.is_edit = false;
                findTask.name = name;
            }
        },
    }
})

export const {addTask, deleteTask, increaseTask, decreaseTask, editTask, renameTask, finishPomodoro} = tasksSlice.actions

export const tasks = (state: RootState) => state.tasks

export default tasksSlice.reducer
