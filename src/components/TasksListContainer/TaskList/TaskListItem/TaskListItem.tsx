import React, {MouseEventHandler, Ref, useEffect, useRef, useState} from 'react';
import {renameTask, TTask} from "../../../../features/tasks/tasksSlice";
import {TaskMenu} from "../../TaskMenu";
import {useAppDispatch} from "../../../../hooks";

interface ITaskListItem {
    task: TTask,
    isMenuShownId: string,
    handleShowMenu: (uid: string) => void
}

export function TaskListItem({task, isMenuShownId, handleShowMenu}: ITaskListItem) {
    const [taskName, setTaskName] = useState(task.name);

    const dispatch = useAppDispatch();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTaskName(event.target.value)
    }

    function handleSubmit(event: React.KeyboardEvent) {
        if (event.code === 'Enter') {
            dispatch(renameTask({uid: task.uid, name: taskName}));
        }
    }

    return (
        <li className={'task-list-item border-b py-5 px-1.5 flex items-center'}>
            <div className={'border rounded-full lh-1 px-4 py-2 mr-5'}>
                {task.pomodoro_cnt}
            </div>
            <div>
                {task.is_edit ?
                    <input className={'bg-gray-100 dark:bg-opacity-10 p-1'} onKeyPress={handleSubmit} onChange={handleChange}
                           value={taskName}/>
                    : task.name
                }
            </div>
            <div className={'ml-auto relative'}>
                <button onClick={() => {
                    handleShowMenu(task.uid)
                }} className={'py-2'}>
                    <svg width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3" cy="3" r="3" fill="#C4C4C4"/>
                        <circle cx="13" cy="3" r="3" fill="#C4C4C4"/>
                        <circle cx="23" cy="3" r="3" fill="#C4C4C4"/>
                    </svg>
                </button>
                <TaskMenu isOpen={isMenuShownId === task.uid} task={task}/>
            </div>
        </li>
    );
}
