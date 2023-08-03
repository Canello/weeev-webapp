import "./ParticipantCard.styles.scss";

import { Spacer } from "../../../../../components/Spacer/Spacer.component";
import { ShareableLink } from "../../../../../components/ShareableLink/ShareableLink.component";
import AltWhatsappNeutral30 from "../../../../../assets/icons/alt-whatsapp-neutral-30.svg";

export const ParticipantCard = ({ participant }) => {
    return (
        <article className="ParticipantCard">
            <h5 className="font-headline-mobile-5 color-n-20">
                {participant.full_name}
            </h5>
            <Spacer dir="y" size="xs" />
            <ShareableLink variant="secondary" link={participant.phone_number}>
                <img
                    className="whatsapp-icon"
                    src={AltWhatsappNeutral30}
                    alt="WhatsApp logo."
                />
                <Spacer dir="x" size="s" />
                <p className="font-body-2 color-n-30">
                    {participant.phone_number}
                </p>
            </ShareableLink>
        </article>
    );
};
