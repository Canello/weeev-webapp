import { createPortal } from "react-dom";

import './PopUp.scss';

export const PopUp = ({ className, isShowing, onClose, children }) => {
    const hideClass = isShowing ? '' : 'hide';

    return createPortal(
        <div className={`PopUp glass-20 ${hideClass}`}>
            <div className={`pop-up-content-container bg-n-white shadow-10 ${className}`}>
                {children}
            </div>
            <div className='clickable-background' onClick={onClose} />
        </div>,
        document.getElementById('pop-up-root')
    );
}