import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../../hooks";
import {TTask} from "../../../features/tasks/tasksSlice";
import {TaskListItem} from "../TaskList/TaskListItem";

export function TaskListTimeCounter() {
    const tasksList = useAppSelector(state => state.tasks.items);
    const pomodoroInMin = useAppSelector(state => state.config.pomodoroInMin);
    const [timeCounter, setTimeCounter] = useState({pomodoro: 0, hour: 0, min: 0});

    useEffect(() => {
        let newTimeCounter = {
            pomodoro: 0,
            hour: 0,
            min: 0
        }

        tasksList.map((task: TTask) => (
            newTimeCounter.pomodoro += task.pomodoro_cnt
        ));

        let totalMin = newTimeCounter.pomodoro * pomodoroInMin;
        newTimeCounter.hour = Math.floor(totalMin / 60);
        newTimeCounter.min = totalMin % 60;

        setTimeCounter(newTimeCounter);

    }, [tasksList]);


    return (
        <div className={'text-gray-300'}>
            {timeCounter.hour > 0 && <span className={'mr-2'}>{timeCounter.hour} час</span>}
            {timeCounter.min > 0 && <span>{timeCounter.min} мин</span>}
        </div>
    );
}
