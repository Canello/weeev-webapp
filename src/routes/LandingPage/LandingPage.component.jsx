import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/Button.component';
import { LoginPopUp } from '../../components/LoginPopUp/LoginPopUp.component';
import { ParticipationSucceededPopUp } from '../../components/ParticipationSucceededPopUp/ParticipationSucceededPopUp.component';
import { Spacer } from '../../components/Spacer/Spacer.component';
import { StepByStep } from './StepByStep/StepByStep.component';
import { GoogleButton } from '../../components/GoogleButton/GoogleButton.component';
import { UserContext } from '../../contexts/User.context';

export const LandingPage = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const goToCreateIdea = () => navigate('/create-idea');
    
    const [ isShowingLoginPopUp, setIsShowingLoginPopUp ] = useState(false);
    const openLoginPopUp = () => setIsShowingLoginPopUp(true);
    const closeLoginPopUp = () => setIsShowingLoginPopUp(false);

    const onClickCreateIdea = () => user ? goToCreateIdea() : openLoginPopUp();

    return (
        <div className='LandingPage page'>
            <Spacer dir='y' size = 'xl' />
            <h1 className='font-headline-mobile-3 color-n-20'>Reúna amigos para agitar um rolê</h1>
            <Spacer dir='y' size='l' />
            <StepByStep />
            <Spacer dir='y' size='xl' />
            <Button className='width-100' label='Criar uma ideia' variant='primary' size='medium' onClick={onClickCreateIdea} />
            {
                user ? null :
                <>
                    <Spacer dir='y' size='s' />
                    <GoogleButton />
                </>
            }
            <LoginPopUp isShowing={isShowingLoginPopUp} onClose={closeLoginPopUp} />
            <ParticipationSucceededPopUp />
        </div>
    );
}