import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../../hooks";
import moment from "moment";
import 'moment/locale/ru';
import {TStatItem} from "../../features/tasks/statSlice";
import {StatPomodoro} from "./StatPomodoro";
import {StatDay} from "./StatDay";
import {StatStop} from "./StatStop";
import {StatPause} from "./StatPause";
import {StatFocus} from "./StatFocus";
import {StatChart} from "./StatChart";

moment.locale('ru');

const emptyStatDay: TStatItem = {
    date: moment().format('YYYY-MM-DD'),
    pomodoro_cnt: 0,
    stop_cnt: 0,
    work_sec: 0,
    pause_sec: 0,
}

export enum ChartMode {
    CurrentWeek,
    LastWeek,
    TwoWeeksAgo
}

const ChartModes = [
    {
        name: 'Эта неделя',
        value: ChartMode.CurrentWeek
    },
    {
        name: 'Прошедшая неделя',
        value: ChartMode.LastWeek
    },
    {
        name: '2 недели назад',
        value: ChartMode.TwoWeeksAgo
    }
];

export function StatContainer() {
    const statItems = useAppSelector(state => state.stat.items);
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
    const [statDay, setStatDay] = useState(emptyStatDay);
    const [selectedDayName, setSelectedDayName] = useState(moment().format('dddd'));
    const [selectedChartMode, setSelectedChartMode] = useState<ChartMode>(ChartMode.CurrentWeek);
    const [isSelectOpen, setIsSelectOpen] = useState(false);

    useEffect(() => {
        setSelectedDayName(moment(selectedDate).format('dddd'));

        //Ищем день в статистике по дате
        let foundStatItem = statItems.find(item => item.date === selectedDate);

        //Применяем найденый день или ставим пустой
        if (foundStatItem) {
            setStatDay(foundStatItem);
        } else {
            setStatDay({
                date: selectedDate,
                pomodoro_cnt: 0,
                stop_cnt: 0,
                work_sec: 0,
                pause_sec: 0,
            });
        }

    }, [selectedDate]);


    useEffect(() => {
        switch (selectedChartMode){
            case ChartMode.CurrentWeek:
                setSelectedDate(moment().format('YYYY-MM-DD'));
                break;
            case ChartMode.LastWeek:
                setSelectedDate(moment().subtract(7, 'days').format('YYYY-MM-DD'));
                break;
            case ChartMode.TwoWeeksAgo:
                setSelectedDate(moment().subtract(14, 'days').format('YYYY-MM-DD'));
                break;
        }
    }, [selectedChartMode]);


    const handleSelectedDateHandler = (selectedDate: string) => {
        setSelectedDate(selectedDate);
        setSelectedDate(selectedDate);
    }

    const handleSelectMode = (selectedMode: ChartMode) => {
        setSelectedChartMode(selectedMode);
        setIsSelectOpen(false);
    }

    return (
        <div>
            <div className={'md:flex justify-between items-center mb-8'}>
                <div className={'font-bold text-2xl leading-8 mb-2'}>Ваша активность</div>
                <div className={'relative'}>
                    <div className={'xl:w-96 py-4 px-5 bg-gray-100 dark:bg-opacity-10'} onClick={() => {
                        setIsSelectOpen(true)
                    }}>
                        <div className={'pr-32'}>
                            {ChartModes.find(chartMode => chartMode.value === selectedChartMode)?.name}
                        </div>
                        <div className={'absolute right-5 top-6'}>
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 1L8 8L1 1" stroke="#B7280F" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                    {
                        isSelectOpen && (
                            <div
                                className={'xl:w-96 bg-gray-100 dark:bg-opacity-10 absolute w-100 top-0 left-0 filter drop-shadow-xl z-10'}>
                                <div className={'absolute right-5 top-6'}>
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2"/>
                                    </svg>
                                </div>
                                {
                                    ChartModes.map(item => {
                                        return (
                                            <div
                                                key={item.value}
                                                onClick={() => {
                                                    handleSelectMode(item.value)
                                                }}
                                                className={'flex items-center justify-between cursor-pointer border-b py-4 px-5'}>
                                                {item.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={'grid xl:grid-cols-4 gap-8 mb-8'}>
                <StatDay selectedDayName={selectedDayName} workInSec={statDay.work_sec}/>
                <StatChart selectedDate={selectedDate} selectedChartMode={selectedChartMode} changeSelectedDate={handleSelectedDateHandler}/>
                <StatPomodoro pomodoroCnt={statDay.pomodoro_cnt}/>
            </div>
            <div className={'grid xl:grid-cols-3 gap-8'}>
                <StatFocus pauseSec={statDay.pause_sec} workInSec={statDay.work_sec}/>
                <StatPause pauseSec={statDay.pause_sec}/>
                <StatStop stopCnt={statDay.stop_cnt}/>
            </div>
        </div>
    );
}
