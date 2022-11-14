import './LoginPopUp.scss';

import { PopUp } from '../PopUp/PopUp.component';
import { Spacer } from '../Spacer/Spacer.component';
import { GoogleButton } from '../GoogleButton/GoogleButton.component';

import weeevLogo from '../../assets/images/weeev.png';

export const LoginPopUp = ({ isShowing, onClose }) => {
    return (
        <PopUp className='LoginPopUp' isShowing={isShowing} onClose={onClose}>
            <img className='weeev-logo' src={weeevLogo} />
            <Spacer dir='y' size='xl' />
            <span className='font-body-2 color-n-30 text-align-center'>Entre para criar ideias e compartilhar com os amigos.</span>
            <Spacer dir='y' size='xl' />
            <GoogleButton />
        </PopUp>
    );
}