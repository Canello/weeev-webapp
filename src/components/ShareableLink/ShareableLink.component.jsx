import { useState } from 'react';

import './ShareableLink.styles.scss';

import CopyGradient from '../../assets/icons/copy-gradient.svg';
import CopyNeutral50 from '../../assets/icons/copy-neutral-50.svg';

const ICON = {
    'primary': CopyGradient,
    'secondary': CopyNeutral50
};

export const ShareableLink = ({ variant='primary', link, children }) => {
    const [ isTipShowing, setIsTipShowing ] = useState(false);
    const showTip = () => {
        setIsTipShowing(true);
        setTimeout(() => setIsTipShowing(false), 1500);
    }
    const copyToClipboard = () => navigator.clipboard.writeText(link);
    const onCopy = () => {
        copyToClipboard();
        showTip();
    }

    return (
        <div className='ShareableLink'>
            <div className='link-container'>
                {children}
            </div>
            <div className='copy-container button-states-10' onClick={onCopy}>
                <img src={ICON[variant]} />
            </div>
            <div className={`tip bg-n-20 transition-10 ${isTipShowing ? '' : 'hide'}`}>
                <span className='font-caption-1 color-n-white'>Copiado!</span>
            </div>
        </div>
    );
}