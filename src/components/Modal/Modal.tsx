import React, {useEffect, useRef} from 'react';
import ReactDOM from "react-dom";
import {preventDefault} from "../../utils/react/preventDefault";

interface IModalProps {
    children?: React.ReactNode;
    onClose?: () => void;
}

const NOOP = () => {};

export function Modal({children, onClose = NOOP}: IModalProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const node = document.getElementById('modal-portal');

    if (!node) return null;

    return ReactDOM.createPortal((
        <div className="fixed z-10 inset-0 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div ref={ref} className="px-8 md:px-20 inline-block bg-white text-center overflow-hidden transform transition-all align-middle">
                    <div onClick={preventDefault(onClose)} className="absolute right-2 top-2 cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9115 13.8058L6.84406 18.9567L4.96166 17.0433L10.0291 11.8924L5.0675 6.84914L6.85992 5.02721L11.8215 10.0705L16.7673 5.04334L18.6497 6.95672L13.7039 11.9839L18.6655 17.0272L16.8731 18.8491L11.9115 13.8058Z" fill="#C4C4C4"/>
                        </svg>
                    </div>
                    <div className="bg-white p-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    ), node);
}
