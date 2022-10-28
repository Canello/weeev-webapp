import './ShareableLink.scss';

import CopyGradient from '../../assets/icons/copy-gradient.svg';

export const ShareableLink = () => {
    return (
        <div className='ShareableLink'>
            <div className='copy-container'>
                <img src={CopyGradient} />
            </div>
            <div className='link-container'>
                <span className='font-link-4 color-i-5'>https://weeev.cc/?ideaId=9712he193hr3asdsdadadad</span>
            </div>
        </div>
    );
}