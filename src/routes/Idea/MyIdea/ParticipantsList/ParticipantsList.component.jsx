import { useEffect } from "react";
import { useState } from "react";

import "./ParticipantsList.styles.scss";

import { ParticipantCard } from "./ParticipantCard/ParticipantCard.component";

export const ParticipantsList = ({ data }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const cardsToSet = data.map((participant) => (
            <ParticipantCard key={participant.id} participant={participant} />
        ));
        setCards(cardsToSet);
    }, [data]);

    return <section className="ParticipantsList">{cards}</section>;
};
