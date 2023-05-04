import React from 'react';

type StatPauseProps = {
    pauseSec: number
}

export function StatPause({pauseSec}: StatPauseProps) {
    const hour = Math.floor(pauseSec / 60);
    const min = pauseSec % 60;

    return (
        <div className={'bg-purple-200  dark:bg-opacity-10  p-6 flex items-center justify-between'}>
            <div>
                <div className={'font-bold text-2xl mb-2.5'}>
                    Время на паузе
                </div>
                <div className={'text-6xl'}>
                    {hour}ч {min}м
                </div>
            </div>
            <div>
                <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.3158 118.632C94.3136 118.632 118.632 94.3136 118.632 64.3158C118.632 34.318 94.3136 10 64.3158 10C34.318 10 10 34.318 10 64.3158C10 94.3136 34.318 118.632 64.3158 118.632Z" stroke="#9C97D7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M64.3154 37.158V64.3159L77.8944 77.8948" stroke="#9C97D7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
}
