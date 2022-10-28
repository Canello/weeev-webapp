import './IconButton.scss';

import CopyGrandient from '../../assets/icons/copy-gradient.svg';
import CopyNeutral50 from '../../assets/icons/copy-neutral-50.svg';
import CopyWhite from '../../assets/icons/copy-white.svg';

const ICON = {
    'primary': CopyWhite,
    'secondary': CopyGrandient,
    'tertiary': CopyNeutral50,
    'primary-solo': CopyGrandient,
    'secondary-solo': CopyNeutral50
}

const BACKGROUND = {
    'primary': 'gradient-p-10',
    'secondary': '',
    'tertiary': 'bg-n-80',
    'primary-solo': '',
    'secondary-solo': ''
}

export const IconButton = ({ variant='primary' }) => {
    return (
        <div className={`IconButton border-m transition-10 ${BACKGROUND[variant]}`}>
            <img src={ICON[variant]} />
        </div>
    );
}