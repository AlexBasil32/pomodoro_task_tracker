import React from 'react';
import {Header} from './Header';
import {Modal} from "../Modal";

interface ILayoutProps {
    children?: React.ReactNode;
}

export function Layout({children}: ILayoutProps) {
    return (
        <div className={'font-sans'}>
            <Header/>
            <main className={'container mx-auto mb-6 px-4'}>
                {children}
            </main>
            <div id="modal-portal"/>
        </div>
    );
}
