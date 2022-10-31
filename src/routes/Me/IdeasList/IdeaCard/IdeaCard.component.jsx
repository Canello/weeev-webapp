import './IdeaCard.scss';

import { Spacer } from '../../../../components/Spacer/Spacer.component';

export const IdeaCard = () => {
    return (
        <div className='IdeaCard flex'>
            <div className='container date-container'>
                <span className='font-headline-mobile-4 color-i-10'>20/11</span>
                <span className='font-headline-mobile-6 color-i-10'>2022</span>
            </div>
            <Spacer dir='x' size='m' />
            <div className='container'>
                <span className='font-headline-mobile-5 color-n-20'>Eu quero jogar queimada</span>
                <span className='font-body-2 color-n-40'>20 pessoas também querem</span>
            </div>
        </div>
    );
}