import "./MyIdea.styles.scss";

import { ShareableLink } from "../../../components/ShareableLink/ShareableLink.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { ParticipantsList } from "./ParticipantsList/ParticipantsList.component";
import { NobodyHerePlaceholder } from "./NobodyHerePlaceholder/NobodyHerePlaceholder.component";
import { makeParticipantsCount } from "../../../utils/functions/makeParticipantsCount";

export const MyIdea = ({ idea, participants }) => {
    const createdAt = new Date(idea.created_at);
    const date =
        createdAt.getDate() +
        "/" +
        (createdAt.getMonth() + 1) +
        "/" +
        createdAt.getFullYear();
    const link = window.location.href;
    const participantsListTitle = makeParticipantsCount(
        idea.participants_count
    );

    return (
        <main className="MyIdea page">
            <Spacer dir="y" size="m" />
            <h1 className="font-headline-mobile-4 color-n-20">{idea.title}</h1>
            <Spacer dir="y" size="xs" />
            <p className="font-body-2 color-n-30">Criada em {date}</p>
            <Spacer dir="y" size="m" />
            <p className="font-body-2 color-n-30">
                Link para compartilhar a ideia:
            </p>
            <Spacer dir="y" size="xs" />
            <ShareableLink link={link}>
                <span className="font-body-2 color-i-5 word-break">{link}</span>
            </ShareableLink>
            <Spacer dir="y" size="xl" />
            <h2 className="font-headline-mobile-4 color-n-20">
                {participantsListTitle}
            </h2>
            <Spacer dir="y" size="xs" />
            <div className="horizontal-line" />
            <Spacer dir="y" size="m" />
            {participants.length > 0 ? (
                <ParticipantsList data={participants} />
            ) : (
                <NobodyHerePlaceholder />
            )}
            <Spacer dir="y" size="xl" />
        </main>
    );
};
