import { useState } from 'react';

import './LandingPage.scss';

import { Button } from '../../components/Button/Button.component';
import { LoginPopUp } from '../../components/LoginPopUp/LoginPopUp.component';
import { ParticipationSucceededPopUp } from '../../components/ParticipationSucceededPopUp/ParticipationSucceededPopUp.component';
import { Spacer } from '../../components/Spacer/Spacer.component';
import { StepByStep } from './StepByStep/StepByStep.component';

import GoogleLogo from '../../assets/images/google-logo.png';

export const LandingPage = () => {
    const [ showLoginPopUp, setShowLoginPopUp ] = useState(false);
    const [ showParticipationSucceededPopUp, setShowParticipationSucceededPopUp ] = useState(false);
    const openLoginPopUp = () => setShowLoginPopUp(true);
    const openParticipationSucceededPopUp = () => setShowParticipationSucceededPopUp(true);
    const closeLoginPopUp = () => setShowLoginPopUp(false);
    const closeParticipationSucceededPopUp = () => setShowParticipationSucceededPopUp(false);

    return (
        <div className='LandingPage page'>
            <Spacer dir='y' size = 'xl' />
            <h1 className='font-headline-desktop-4 color-n-20 text-align-center'>Reúna amigos para fazer qualquer coisa</h1>
            <Spacer dir='y' size='l' />
            <StepByStep />
            <Spacer dir='y' size='xl' />
            <Button className='width-100' label='Criar uma ideia' variant='primary' size='large' onClick={openLoginPopUp} />
            <Spacer dir='y' size='m' />
            <Button className='width-100' label='Entrar com Google' variant='secondary' size='large' onClick={openParticipationSucceededPopUp}>
                <Spacer dir='x' size='s' />
                <img className='google-logo' src={GoogleLogo} />
            </Button>
            <LoginPopUp show={showLoginPopUp} onClose={closeLoginPopUp} />
            <ParticipationSucceededPopUp show={showParticipationSucceededPopUp} onClose={closeParticipationSucceededPopUp} />
        </div>
    );
}