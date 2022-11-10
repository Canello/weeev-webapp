import { useEffect, useState } from 'react';

import { IdeaCard } from './IdeaCard/IdeaCard.component';

export const IdeasList = ({ data }) => {
    const [ cards, setCards ] = useState();

    useEffect(() => {
        const cardsToSet = data.map(idea => <IdeaCard key={idea.id} idea={idea} />);
        setCards(cardsToSet);
    }, [data]);

    return (
        <div className='IdeasList'>
            {cards}
        </div>
    );
}