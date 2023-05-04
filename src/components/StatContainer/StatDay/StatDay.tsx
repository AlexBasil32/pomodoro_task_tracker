import React from 'react';
import {declinationOfNumber} from "../../../helpers/declinationOfNumber";

type StatPomodoroProps = {
    selectedDayName: string,
    workInSec: number
}

export function StatDay({selectedDayName, workInSec}: StatPomodoroProps) {
    const hour = Math.floor(workInSec / 60);
    const min = workInSec % 60;

    const timeString = `${hour} ${declinationOfNumber(hour, ['часа', 'часов', 'часов'])} ${min} ${declinationOfNumber(min, ['минуты', 'минут', 'минут'])}`

    return (
        <div className={'bg-gray-100 dark:bg-opacity-10 2xl:row-span-2 p-6'}>
            <div className={'font-bold text-2xl leading-8 mb-2 capitalize'}>{selectedDayName}</div>
            <div>
                Вы работали над задачами в течение <span
                className={'font-bold text-red-500 whitespace-nowrap'}>{timeString}</span>
            </div>
        </div>
    );
}
