import { Button } from '../../components/Button/Button.component';
import { Spacer } from '../../components/Spacer/Spacer.component';
import { StepByStep } from './StepByStep/StepByStep.component';

export const LandingPage = () => {
    return (
        <div className='LandingPage page'>
            <Spacer dir='y' size = 'xl' />
            <h1 className='font-headline-desktop-4'>Reúna amigos para fazer qualquer coisa</h1>
            <Spacer dir='y' size='l' />
            <StepByStep />
            <Spacer dir='y' size='xl' />
            <Button className='width-100' label='Criar uma ideia' variant='primary' size='large' />
            <Spacer dir='y' size='m' />
            <Button className='width-100' label='Entrar com Google' variant='secondary' size='large' />
        </div>
    );
}