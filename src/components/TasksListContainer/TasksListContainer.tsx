import React from 'react';
import {TaskInput} from "./TaskInput";
import {TaskList} from "./TaskList";
import {TaskListTimeCounter} from "./TaskListTimeCounter";


export function TasksListContainer() {
    return (
        <div>
            <div className={'font-bold text-2xl leading-8 mb-2'}>Ура! Теперь можно начать работать:</div>
            <ul className={'list-disc mb-6 ml-5 leading-8'}>
                <li>Выберите категорию и напишите название текущей задачи</li>
                <li>Запустите таймер («помидор»)</li>
                <li>Работайте пока «помидор» не прозвонит</li>
                <li>Сделайте короткий перерыв (3-5 минут)</li>
                <li>Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).</li>
            </ul>
            <TaskInput/>
            <TaskList/>
            <TaskListTimeCounter/>
        </div>
    );
}
