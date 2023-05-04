import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../../store";
import moment from "moment";

export type TStatItem = {
    date: string,
    pomodoro_cnt: number,
    stop_cnt: number,
    work_sec: number,
    pause_sec: number,
}

interface IStatState {
    items: TStatItem[]
}

const currentDateStateItem:TStatItem = {
    date: moment().format('YYYY-MM-DD'),
    pomodoro_cnt: 0,
    stop_cnt: 0,
    work_sec: 0,
    pause_sec: 0,
}

const initialStatState: IStatState = {
    items: [currentDateStateItem]
}

export const statSlice = createSlice({
    name: 'stat',
    initialState: initialStatState,
    reducers: {
        setCurrentDateEmptyItem: (state) =>{
            let currentDate = moment().format('YYYY-MM-DD');
            let findStatItem = state.items.find(statItem => statItem.date === currentDate);

            if(!findStatItem){
                state.items.push(currentDateStateItem);
            }
        },
        increaseStatPomodoroCounter: (state) => {
            let currentDate = moment().format('YYYY-MM-DD');
            let findStatItem = state.items.find(statItem => statItem.date === currentDate);

            if (findStatItem) {
                findStatItem.pomodoro_cnt++;
            }
        },
        increaseStatStopCounter: (state) => {
            let currentDate = moment().format('YYYY-MM-DD');
            let findStatItem = state.items.find(statItem => statItem.date === currentDate);

            if (findStatItem) {
                findStatItem.stop_cnt++;
            }
        },
        increaseStatPauseSec: (state) => {
            let currentDate = moment().format('YYYY-MM-DD');
            let findStatItem = state.items.find(statItem => statItem.date === currentDate);

            if (findStatItem) {
                findStatItem.pause_sec++;
            }
        },
        increaseStatWorkSec: (state) => {
            let currentDate = moment().format('YYYY-MM-DD');
            let findStatItem = state.items.find(statItem => statItem.date === currentDate);

            if (findStatItem) {
                findStatItem.work_sec++;
            }
        },
    }
})

export const {increaseStatPomodoroCounter, increaseStatStopCounter, increaseStatPauseSec, increaseStatWorkSec, setCurrentDateEmptyItem} = statSlice.actions

export const stat = (state: RootState) => state.stat

export default statSlice.reducer
