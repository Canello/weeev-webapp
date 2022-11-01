import './LoginPopUp.scss';

import { PopUp } from '../PopUp/PopUp.component';
import { Spacer } from '../Spacer/Spacer.component';
import { Button } from '../Button/Button.component';

import weeevLogo from '../../assets/images/weeev.png';
import GoogleLogo from '../../assets/images/google-logo.png';

export const LoginPopUp = ({ show, onClose }) => {
    return (
        <PopUp className='LoginPopUp' show={show} onClose={onClose}>
            <img className='weeev-logo' src={weeevLogo} />
            <Spacer dir='y' size='xl' />
            <span className='font-body-2 color-n-30 text-align-center'>Entre para criar ideias e compartilhar com os amigos.</span>
            <Spacer dir='y' size='xl' />
            <Button className='width-100' variant='secondary' size='large' label='Entrar com Google'>
                <Spacer dir='x' size='s' />
                <img className='google-logo' src={GoogleLogo} />
            </Button>
        </PopUp>
    );
}