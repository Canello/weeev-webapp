import { createPortal } from "react-dom";

import './PopUp.scss';

export const PopUp = ({ onClose, children }) => {
    return createPortal(
        <div className='PopUp glass-20'>
            <div className='pop-up-content-container bg-n-white shadow-10'>
                {children}
            </div>
            <div className='clickable-background' onClick={onClose} />
        </div>,
        document.getElementById('pop-up-root')
    );
}