import './ParticipantCard.scss';

import { IconButton } from '../../../../../components/IconButton/IconButton.component';
import { Spacer } from '../../../../../components/Spacer/Spacer.component';
import CopyGradient from '../../../../../assets/icons/copy-gradient.svg';

export const ParticipantCard = () => {
    return (
        <div className='ParticipantCard'>
            <h5 className='font-headline-mobile-5 color-n-20'>Nome do Participante</h5>
            <div className='flex'>
                <div className='info-container'>
                    <IconButton variant='primary-solo' icon={CopyGradient} />
                    <Spacer dir='x' size='xs' />
                    <span className='font-link-4 color-i-5'>@instagram</span>
                </div>
                <Spacer dir='x' size='xs' />
                <div className='info-container'>
                    <IconButton variant='primary-solo' icon={CopyGradient} />
                    <Spacer dir='x' size='xs' />
                    <span className='font-link-4 color-i-5'>11 91234 5678</span>
                </div>
            </div>
        </div>
    );
}