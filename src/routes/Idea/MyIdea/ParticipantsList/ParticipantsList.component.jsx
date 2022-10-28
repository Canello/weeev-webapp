import { useEffect } from 'react';
import { useState } from 'react';

import './ParticipantsList.scss';

import { ParticipantCard } from './ParticipantCard/ParticipantCard.component';

const participants = [];
for (let i = 0; i < 25; i++) { participants.push(i) }

export const ParticipantsList = () => {
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        const cardsToSet = participants.map(participant => <ParticipantCard key={participant} />);
        setCards(cardsToSet);
    }, []);

    return (
        <div className='ParticipantsList'>
            {cards}
        </div>
    );
}