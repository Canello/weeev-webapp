import "./NobodyHerePlaceholder.styles.scss";

import { Spacer } from "../../../../components/Spacer/Spacer.component";
import NobodyHere from "../../../../assets/images/nobody-here.png";

export const NobodyHerePlaceholder = () => {
    return (
        <section className="NobodyHerePlaceholder">
            <Spacer dir="y" size="xxl" />
            <img src={NobodyHere} alt="Empty chairs with clouds above them." />
            <Spacer dir="y" size="m" />
            <p className="font-body-2 color-n-30 text-align-center">
                Compartilhe o link para saber quem quer participar da ideia.
            </p>
        </section>
    );
};
