import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";

export enum ETheme { light, dark }

interface IConfigState {
    pomodoroInMin: number,
    smallBreakTime: number,
    largeBreakTime: number,
    theme: ETheme.light
}

const initialConfigState: IConfigState = {
    pomodoroInMin: 25,
    smallBreakTime: 5,
    largeBreakTime: 30,
    theme: ETheme.light,
}

export const configSlice = createSlice({
    name: 'config',
    initialState: initialConfigState,
    reducers: {
        setStatePomodoroInMin: (state, action: PayloadAction<number>) => {
            state.pomodoroInMin = action.payload;
        },
        setStateSmallBreakTime: (state, action: PayloadAction<number>) => {
            state.smallBreakTime = action.payload;
        },
        setStateLargeBreakTime: (state, action: PayloadAction<number>) => {
            state.largeBreakTime = action.payload;
        },
        setStateTheme: (state, action: PayloadAction<number>) => {
            state.theme = action.payload;
        },
    }
})

export const {setStatePomodoroInMin, setStateSmallBreakTime, setStateLargeBreakTime, setStateTheme} = configSlice.actions

export const config = (state: RootState) => state.config

export default configSlice.reducer
