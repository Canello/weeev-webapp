import './ShareableLink.scss';

import CopyGradient from '../../assets/icons/copy-gradient.svg';

export const ShareableLink = () => {
    return (
        <div className='ShareableLink'>
            <div className='copy-container'>
                <img src={CopyGradient} />
            </div>
            <div className='link-container'>
                <span className='font-link-4 color-i-5 word-break'>https://weeev.cc/9712he193hr3asdsdadadajsdadjasiojdadajsdau</span>
            </div>
        </div>
    );
}