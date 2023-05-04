import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {setStateLargeBreakTime, setStatePomodoroInMin, setStateSmallBreakTime} from "../../features/tasks/configSlice";

export function ConfigContainer() {
    const dispatch = useAppDispatch();

    const pomodoroInMin = useAppSelector(state => state.config.pomodoroInMin);
    const smallBreakTime = useAppSelector(state => state.config.smallBreakTime);
    const largeBreakTime = useAppSelector(state => state.config.largeBreakTime);

    const [pomodoroInMinValue, setPomodoroInMinValue] = useState(pomodoroInMin);
    const [smallBreakTimeValue, setSmallBreakTimeValue] = useState(smallBreakTime);
    const [largeBreakTimeValue, setLargeBreakTimeValue] = useState(largeBreakTime);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return parseInt(event.target.value) || 1;
    }

    function handlePomodoroChange(event: React.ChangeEvent<HTMLInputElement>) {
        let newValue = handleChange(event);
        setPomodoroInMinValue(newValue);
        dispatch(setStatePomodoroInMin(newValue));
    }

    function handleSmallBreakTimeValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        let newValue = handleChange(event);
        setStateSmallBreakTime(newValue);
        setSmallBreakTimeValue(handleChange(event));
    }

    function handleLargeBreakTimeValueChange(event: React.ChangeEvent<HTMLInputElement>) {
        let newValue = handleChange(event);
        setStateLargeBreakTime(newValue);
        setLargeBreakTimeValue(handleChange(event));
    }

    return (
        <div>
            <div className="font-bold text-2xl leading-8 mb-6">Настройки</div>
            <div className={'mb-6'}>
                <label>
                    <div>Продолжительность «помидора»:</div>
                    <input className={'w-80 bg-gray-100 dark:bg-opacity-10 py-4 px-5'} type="number" min="1" value={pomodoroInMinValue}
                           onChange={handlePomodoroChange}/>
                </label>
            </div>
            <div className={'mb-6'}>
                <label>
                    <div>Продолжительность короткого перерыва:</div>
                    <input className={'w-80 bg-gray-100 dark:bg-opacity-10 py-4 px-5'} type="number" min="1" value={smallBreakTimeValue}
                           onChange={handleSmallBreakTimeValueChange}/>
                </label>
            </div>
            <div className={'mb-6'}>
                <label>
                    <div>Продолжительность длинного перерыва:</div>
                    <input className={'w-80 bg-gray-100 dark:bg-opacity-10 py-4 px-5'} type="number" min="1" value={largeBreakTimeValue}
                           onChange={handleLargeBreakTimeValueChange}/>
                </label>
            </div>
        </div>
    );
}
