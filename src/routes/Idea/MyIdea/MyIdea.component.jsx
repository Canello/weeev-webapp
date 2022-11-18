import './MyIdea.styles.scss';

import { ShareableLink } from "../../../components/ShareableLink/ShareableLink.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { ParticipantsList } from './ParticipantsList/ParticipantsList.component';
import { NobodyHerePlaceholder } from './NobodyHerePlaceholder/NobodyHerePlaceholder.component';

const _makeTitle = (participantsCount) =>{
    switch (participantsCount) {
        case 0:
            return 'Ninguém, por enquanto...';
        case 1:
            return `${participantsCount} também quer`;
        default:
            return `${participantsCount} também querem`; 
    }
}

export const MyIdea = ({ idea, participants }) => {
    const createdAt = new Date(idea.created_at);
    const date = createdAt.getDate() + '/' + (createdAt.getMonth() + 1) + '/' + createdAt.getFullYear();
    const link = window.location.href;
    const participantsListTitle = _makeTitle(idea.participants_count);

    return (
        <div className='MyIdea page'>
            <Spacer dir='y' size='m' />
            <h1 className='font-headline-mobile-4 color-n-20' >{idea.title}</h1>
            <Spacer dir='y' size='xs' />
            <h3 className='font-body-2 color-n-30' >Criada em {date}</h3>
            <Spacer dir='y' size='m' />
            <h2 className='font-body-2 color-n-30' >Link para compartilhar a ideia:</h2>
            <Spacer dir='y' size='xs' />
            <ShareableLink link={link}>
                <span className='font-body-2 color-i-5 word-break'>{link}</span>
            </ShareableLink>
            <Spacer dir='y' size='xl' />
            <h4 className='font-headline-mobile-4 color-n-20'>{participantsListTitle}</h4>
            <Spacer dir='y' size='xs' />
            <div className='horizontal-line' />
            <Spacer dir='y' size='m' />
            {participants.length > 0 ? <ParticipantsList data={participants} /> : <NobodyHerePlaceholder />}
            <Spacer dir='y' size='xl' />
        </div>
    );
}