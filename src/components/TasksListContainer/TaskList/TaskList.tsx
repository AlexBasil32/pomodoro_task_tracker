import React, {useEffect, useRef, useState} from 'react';
import {useAppSelector} from '../../../hooks'
import {TTask} from "../../../features/tasks/tasksSlice";
import {TaskListItem} from "./TaskListItem";

export function TaskList() {
    const menuRef = useRef<HTMLUListElement>(null);
    const tasksList = useAppSelector(state => state.tasks.items);
    const [isMenuShownId, setIsMenuShownId] = useState('');

    const showMenu = (uid: string) => {
        if (uid === isMenuShownId) {
            setIsMenuShownId('');
        } else {
            setIsMenuShownId(uid);
        }
    }

    //Закрытие выпадающего меню по клику вне списка
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
                setIsMenuShownId('');
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    return (
        <ul ref={menuRef} className={'task-list mb-6 xl:pr-40'}>
            {tasksList.map((task: TTask) => (
                <TaskListItem task={task} key={task.uid} isMenuShownId={isMenuShownId} handleShowMenu={showMenu}/>
            ))}
        </ul>
    );
}
