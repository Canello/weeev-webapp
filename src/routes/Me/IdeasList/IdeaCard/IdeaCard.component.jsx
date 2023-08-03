import { useNavigate } from "react-router-dom";

import "./IdeaCard.styles.scss";

import { Spacer } from "../../../../components/Spacer/Spacer.component";
import { makeParticipantsCount } from "../../../../utils/functions/makeParticipantsCount";

export const IdeaCard = ({ idea }) => {
    const navigate = useNavigate();
    const goToIdea = () => navigate("/idea/" + idea.id);
    const createdAt = new Date(idea.created_at);
    const participantsCount = makeParticipantsCount(idea.participants_count);

    return (
        <article className="IdeaCard flex" onClick={goToIdea}>
            <div className="container date-container">
                <span className="font-headline-mobile-4 color-i-10">
                    {createdAt.getDate() + "/" + (createdAt.getMonth() + 1)}
                </span>
                <h3 className="font-headline-mobile-6 color-i-10">
                    {createdAt.getFullYear()}
                </h3>
            </div>
            <Spacer dir="x" size="m" />
            <div className="container">
                <h2 className="font-headline-mobile-5 color-n-20">
                    {idea.title}
                </h2>
                <p className="font-body-2 color-n-40">{participantsCount}</p>
            </div>
        </article>
    );
};
