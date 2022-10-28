import './MyIdea.scss';

import { ShareableLink } from "../../../components/ShareableLink/ShareableLink.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { ParticipantsList } from './ParticipantsList/ParticipantsList.component';

export const MyIdea = () => {
    return (
        <div className='MyIdea page'>
            <Spacer dir='y' size='m' />
            <h1 className='font-headline-mobile-4 color-n-30' >Eu quero jogar queimada</h1>
            <Spacer dir='y' size='xs' />
            <h3 className='font-caption-1 color-n-40' >Criada em 20/11/2022</h3>
            <Spacer dir='y' size='m' />
            <h2 className='font-body-2 color-n-30' >Link para compartilhar a ideia:</h2>
            <Spacer dir='y' size='xs' />
            <ShareableLink />
            <Spacer dir='y' size='xl' />
            <h4 className='font-headline-mobile-4 color-n-20'>20 também querem</h4>
            <Spacer dir='y' size='xs' />
            <div className='horizontal-line' />
            <Spacer dir='y' size='m' />
            <ParticipantsList />
            <Spacer dir='y' size='xl' />
        </div>
    );
}