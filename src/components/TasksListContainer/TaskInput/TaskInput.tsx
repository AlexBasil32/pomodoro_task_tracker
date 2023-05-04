import React, {useState} from 'react';
import {addTask} from '../../../features/tasks/tasksSlice'
import {useAppDispatch} from '../../../hooks'
import {generateGuid} from "../../../helpers/generateUuid";

export function TaskInput() {
    const dispatch = useAppDispatch()
    const [taskName, setTaskName] = useState('');

    const defaultTask = {
        uid: generateGuid(),
        name: taskName,
        pomodoro_cnt: 1,
        pomodoro_finished: 0,
        is_edit: false
    };

    function handleSubmit(event: React.KeyboardEvent) {
        if (event.code === 'Enter') {
            addNewTask();
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value);
    }

    function addNewTask() {
        dispatch(addTask(defaultTask));
        setTaskName('');
    }

    return (
        <div className={'mb-6'}>
            <div className={'mb-6'}>
                <input onKeyPress={handleSubmit} value={taskName} onChange={handleChange}
                       className={'w-80 bg-gray-100 dark:bg-opacity-10 py-4 px-5'}
                       placeholder="Название задачи" required/>
            </div>
            <button onClick={addNewTask} className={'bg-green hover:bg-darkgreen py-4 px-12 text-white'}>Добавить
            </button>
        </div>
    );
}
