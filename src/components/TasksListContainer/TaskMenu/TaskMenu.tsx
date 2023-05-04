import React, {useState} from 'react';
import {deleteTask, increaseTask, decreaseTask, editTask, TTask} from '../../../features/tasks/tasksSlice'
import {useAppDispatch} from "../../../hooks";
import {Modal} from "../../Modal";
import {IconDecrease, IconDelete, IconEdit, IconIncrease} from "../../Icons";

interface ITaskMenuProps {
    isOpen: boolean,
    task: TTask,
}

export function TaskMenu({isOpen, task}: ITaskMenuProps) {
    const itemClassList = 'px-8 py-2 text-gray-300 cursor-pointer hover:bg-gray-100 flex items-center';

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useAppDispatch();

    if (!isOpen) return null;

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    function handleEditTask() {
        dispatch(editTask(task.uid));
    }

    function handleDeleteTask() {
        dispatch(deleteTask(task.uid))
    }

    function handleIncreaseTask() {
        dispatch(increaseTask(task.uid));
    }

    function handleDecreaseTask() {
        dispatch(decreaseTask(task.uid));
    }

    return (
        <div className={'absolute top-8 z-10 bg-white border transform right-0 xl:right-auto xl:-translate-x-2/4 xl:left-1/2'}>
            <ul>
                <li className={itemClassList} onClick={handleIncreaseTask}>
                    <IconIncrease/>
                    <span>Увеличить</span>
                </li>
                <li className={task.pomodoro_cnt === 1 ? itemClassList + ' pointer-events-none filter grayscale' : itemClassList}
                    onClick={handleDecreaseTask}>
                    <IconDecrease/>
                    <span>Уменьшить</span>
                </li>
                <li className={itemClassList} onClick={handleEditTask}>
                    <IconEdit/>
                    <span>Редактировать</span>
                </li>
                <li className={itemClassList} onClick={handleOpenModal}>
                    <IconDelete/>
                    <span>Удалить</span>
                </li>
            </ul>
            {isModalOpen &&
            <Modal onClose={handleCloseModal}>
                <div>
                    <div className={'text-xl mb-6'}>Удалить задачу?</div>
                    <button className={'block mx-auto bg-red-500 py-4 px-12 text-white m-2.5'} onClick={handleDeleteTask}>
                        Удалить
                    </button>
                    <button className={'block mx-auto font-light underline'} onClick={handleCloseModal}>
                        Отмена
                    </button>
                </div>
            </Modal>
            }
        </div>
    )
}
