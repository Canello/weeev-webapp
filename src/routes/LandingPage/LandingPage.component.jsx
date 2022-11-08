import { useState } from 'react';

import { Button } from '../../components/Button/Button.component';
import { LoginPopUp } from '../../components/LoginPopUp/LoginPopUp.component';
import { ParticipationSucceededPopUp } from '../../components/ParticipationSucceededPopUp/ParticipationSucceededPopUp.component';
import { Spacer } from '../../components/Spacer/Spacer.component';
import { StepByStep } from './StepByStep/StepByStep.component';
import { GoogleButton } from '../../components/GoogleButton/GoogleButton.component';

export const LandingPage = () => {
    const [ showLoginPopUp, setShowLoginPopUp ] = useState(false);
    const openLoginPopUp = () => setShowLoginPopUp(true);
    const closeLoginPopUp = () => setShowLoginPopUp(false);
    const [ showParticipationSucceededPopUp, setShowParticipationSucceededPopUp ] = useState(false);
    const openParticipationSucceededPopUp = () => setShowParticipationSucceededPopUp(true);
    const closeParticipationSucceededPopUp = () => setShowParticipationSucceededPopUp(false);

    return (
        <div className='LandingPage page'>
            <Spacer dir='y' size = 'xl' />
            <h1 className='font-headline-mobile-3 color-n-20 text-align-center'>Reúna amigos para fazer qualquer coisa</h1>
            <Spacer dir='y' size='l' />
            <StepByStep />
            <Spacer dir='y' size='xl' />
            <Button className='width-100' label='Criar uma ideia' variant='primary' size='medium' onClick={openLoginPopUp} />
            <Spacer dir='y' size='s' />
            <GoogleButton />
            <LoginPopUp show={showLoginPopUp} onClose={closeLoginPopUp} />
            <ParticipationSucceededPopUp show={showParticipationSucceededPopUp} onClose={closeParticipationSucceededPopUp} />
        </div>
    );
}