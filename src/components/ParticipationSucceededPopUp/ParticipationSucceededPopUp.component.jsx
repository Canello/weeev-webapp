import { useContext } from "react";

import "./ParticipationSucceededPopUp.styles.scss";

import { PopUp } from "../PopUp/PopUp.component";
import { Spacer } from "../Spacer/Spacer.component";
import { Button } from "../Button/Button.component";
import { NotificationsContext } from "../../contexts/Notifications.context";

import SuccessMark from "../../assets/images/success-mark.svg";

export const ParticipationSucceededPopUp = () => {
    const { participation } = useContext(NotificationsContext);

    return (
        <PopUp
            className="ParticipationSucceededPopUp"
            isShowing={participation.isShowing}
            onClose={participation.hide}
        >
            <img src={SuccessMark} alt="Success check mark icon." />
            <Spacer dir="y" size="xl" />
            <h2 className="font-headline-mobile-4 color-n-20 text-align-center">
                Agora é só esperar
            </h2>
            <Spacer dir="y" size="xs" />
            <p className="font-body-2 color-n-30 text-align-center">
                E torcer para {participation.creatorFirstName} agitar o rolê.
            </p>
            <Spacer dir="y" size="xl" />
            <Button
                className="width-100"
                variant="tertiary"
                size="large"
                label="Ok"
                onClick={participation.hide}
            />
        </PopUp>
    );
};
