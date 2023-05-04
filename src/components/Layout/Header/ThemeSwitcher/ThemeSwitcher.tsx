import React, {useEffect, useState} from 'react';
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {setStateTheme} from "../../../../features/tasks/configSlice";

export function ThemeSwitcher() {
    const dispatch = useAppDispatch();

    const theme = useAppSelector(state => state.config.theme);

    const [isOn, setIsOn] = useState(!!theme);

    //Классы стилей
    const btn = classNames(
        'w-5 h-5 rounded-full shadow-md transform cursor-pointer',
        {
            'bg-white': !isOn,
            'bg-red-500 ml-5': isOn,
        },
    );

    function toggleTheme(){
        setIsOn(!isOn);
        dispatch(setStateTheme(!isOn ? 1 : 0));
    }

    useEffect(() => {

        if(isOn){
            document.querySelector('html')?.classList.add('dark');
            document.body?.classList.add('text-white');
        }else{
            document.querySelector('html')?.classList.remove('dark');
            document.body?.classList.remove('text-white');
        }

    }, [isOn]);


    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center">
                <span>
                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </span>
                <div className="w-12 h-6 flex items-center bg-gray-100 dark:bg-gray-500 rounded-full mx-3 px-1 cursor-pointer" onClick={() => toggleTheme()}>
                    <div className={btn}/>
                </div>
                <span>
                    <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                </span>
            </div>
        </div>
    );
}
