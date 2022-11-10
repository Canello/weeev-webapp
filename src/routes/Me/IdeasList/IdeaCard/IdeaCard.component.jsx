import { useNavigate } from 'react-router-dom';

import './IdeaCard.scss';

import { Spacer } from '../../../../components/Spacer/Spacer.component';

export const IdeaCard = ({ idea }) => {
    const navigate = useNavigate();
    const goToIdea = () => navigate('/idea/' + idea.id);
    const createdAt = new Date(idea.created_at);

    return (
        <div className='IdeaCard flex' onClick={goToIdea}>
            <div className='container date-container'>
                <span className='font-headline-mobile-4 color-i-10'>{createdAt.getDate() + '/' + (createdAt.getMonth() + 1)}</span>
                <span className='font-headline-mobile-6 color-i-10'>{createdAt.getFullYear()}</span>
            </div>
            <Spacer dir='x' size='m' />
            <div className='container'>
                <span className='font-headline-mobile-5 color-n-20'>{idea.title}</span>
                <span className='font-body-2 color-n-40'>{idea.participants_count} também querem</span>
            </div>
        </div>
    );
}