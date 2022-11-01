import './ParticipationSucceededPopUp.scss';

import { PopUp } from '../PopUp/PopUp.component';
import SuccessMark from '../../assets/images/success-mark.svg';
import { Spacer } from '../Spacer/Spacer.component';
import { Button } from '../Button/Button.component';

export const ParticipationSucceededPopUp = ({ show, onClose }) => {
    return (
        <PopUp className='ParticipationSucceededPopUp' show={show} onClose={onClose}>
            <img src={SuccessMark} />
            <Spacer dir='y' size='xl' />
            <span className='font-headline-mobile-4 color-n-20 text-align-center'>Agora é só esperar</span>
            <Spacer dir='y' size='xs' />
            <span className='font-body-2 color-n-30 text-align-center'>E torcer pro rolê rolar.</span>
            <Spacer dir='y' size='xl' />
            <Button className='width-100' variant='tertiary' size='large' label='Ok' onClick={onClose} />
        </PopUp>
    );
}