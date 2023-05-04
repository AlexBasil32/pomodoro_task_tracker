import {createSlice} from '@reduxjs/toolkit'
import {RootState} from "../../store";

interface IBreaksState {
    breakCounter: number,
}

const initialBreaksState: IBreaksState = {
    breakCounter: 0,
}

export const breaksSlice = createSlice({
    name: 'breaks',
    initialState: initialBreaksState,
    reducers: {
        increaseBreaksCounter: (state) => {
            state.breakCounter++;
        },
    }
})

export const {increaseBreaksCounter} = breaksSlice.actions

export const config = (state: RootState) => state.config

export default breaksSlice.reducer
