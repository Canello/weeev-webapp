import { useContext } from 'react';

import './ParticipationSucceededPopUp.scss';

import { PopUp } from '../PopUp/PopUp.component';
import { Spacer } from '../Spacer/Spacer.component';
import { Button } from '../Button/Button.component';
import { NotificationsContext } from '../../contexts/Notifications.context';

import SuccessMark from '../../assets/images/success-mark.svg';

export const ParticipationSucceededPopUp = () => {
    const { participation } = useContext(NotificationsContext);

    return (
        <PopUp className='ParticipationSucceededPopUp' isShowing={participation.isShowing} onClose={participation.hide}>
            <img src={SuccessMark} />
            <Spacer dir='y' size='xl' />
            <span className='font-headline-mobile-4 color-n-20 text-align-center'>Agora é só esperar</span>
            <Spacer dir='y' size='xs' />
            <span className='font-body-2 color-n-30 text-align-center'>E torcer para {participation.creatorFirstName} agitar o rolê.</span>
            <Spacer dir='y' size='xl' />
            <Button className='width-100' variant='tertiary' size='large' label='Ok' onClick={participation.hide} />
        </PopUp>
    );
}