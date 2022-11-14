import { useEffect } from 'react';
import { useState } from 'react';

import './ParticipantsList.scss';

import { ParticipantCard } from './ParticipantCard/ParticipantCard.component';

export const ParticipantsList = ({ data }) => {
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        const cardsToSet = data.map(participant => <ParticipantCard key={participant.id} participant={participant} />);
        setCards(cardsToSet);
    }, []);

    return (
        <div className='ParticipantsList'>
            {cards}
        </div>
    );
}