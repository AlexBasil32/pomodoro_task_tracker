import React from 'react';
import {Layout} from "../../components/Layout";
import {TasksListContainer} from "../../components/TasksListContainer";
import {TaskContainer} from "../../components/TaskContainer";
import {useAppSelector} from "../../hooks";

export function HomePage() {
    const tasksList = useAppSelector(state => state.tasks.items);

    return (
        <div className={'grid xl:grid-cols-3 gap-4'}>
            <TasksListContainer/>
            {tasksList.length > 0 && <TaskContainer/>}
        </div>
    );
}
