import { useEffect, useState } from "react";

import { IdeaCard } from "./IdeaCard/IdeaCard.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { Pagination } from "./Pagination/Pagination.component";

export const IdeasList = ({ data }) => {
    const [cards, setCards] = useState();

    useEffect(() => {
        const cardsToSet = data.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
        ));
        setCards(cardsToSet);
    }, [data]);

    return (
        <section className="IdeasList">
            {cards}
            <Spacer dir="y" size="xl" />
            <Pagination />
        </section>
    );
};
