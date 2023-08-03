import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../components/Button/Button.component";
import { Input } from "../../../components/Input/Input.component";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { NotificationsContext } from "../../../contexts/Notifications.context";
import { useFetch } from "../../../hooks/useFetch.hook";
import { participate } from "../../../services/ideas.services";

export const IdeaForms = ({ idea }) => {
    const creatorFirstName = idea.creator_name?.split(" ")[0];
    const { participation } = useContext(NotificationsContext);
    const navigate = useNavigate();
    const goToLandingPage = () => navigate("/");

    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState(false);
    const [fullNameWarning, setFullNameWarning] = useState("");
    const setFullNameAndRemoveError = (t) => {
        setFullName(t);
        setFullNameError(false);
    };

    const [instagram, setInstagram] = useState("");

    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [phoneNumberWarning, setPhoneNumberWarning] = useState("");
    const setPhoneNumberAndRemoveError = (t) => {
        setPhoneNumber(t);
        setPhoneNumberError(false);
    };

    const [
        requestParticipation,
        result,
        isFetchingParticipation,
        participationError,
    ] = useFetch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (fullName.length < 1) {
            setFullNameError(true);
            setFullNameWarning("Você não tem nome?");
            return;
        }
        if (phoneNumber.length < 1) {
            setPhoneNumberError(true);
            setPhoneNumberWarning(
                "Como vão te chamar pro rolê sem seu número?"
            );
            return;
        }
        requestParticipation(
            participate(idea.id, fullName, instagram, phoneNumber),
            null,
            (res) => {
                participation.setCreatorFirstName(creatorFirstName);
                participation.show();
                goToLandingPage();
            }
        );
    };

    return (
        <main className="IdeaForms page">
            <form>
                <Spacer dir="y" size="xl" />
                <h1 className="font-headline-mobile-4 color-n-20">
                    {creatorFirstName} quer jogar queimada
                </h1>
                <Spacer dir="y" size="xs" />
                <p className="font-body-2 color-n-30">
                    Se ele(a) decidir agitar o rolê, poderá criar um grupo e te
                    adicionar.
                    <br />
                    Apenas {creatorFirstName} pode ver sua resposta.
                </p>
                <Spacer dir="y" size="xl" />
                <Input
                    value={fullName}
                    setValue={setFullNameAndRemoveError}
                    label="Meu nome"
                    maxLength={70}
                    error={fullNameError}
                    helperText={fullNameWarning}
                />
                <Spacer dir="y" size="m" />
                {/* <Input value={instagram} setValue={setInstagram} label='@meu_instagram' />
            <Spacer dir='y' size='m' /> */}
                <Input
                    value={phoneNumber}
                    setValue={setPhoneNumberAndRemoveError}
                    label="Meu número (WhatsApp)"
                    maxLength={40}
                    error={phoneNumberError}
                    helperText={phoneNumberWarning}
                />
                <Spacer dir="y" size="m" />
                <Button
                    className="width-100"
                    label="Também quero"
                    variant="primary"
                    size="large"
                    onClick={onSubmit}
                />
                <Spacer dir="y" size="m" />
                <p className="note font-caption-2 color-n-30 text-align-center">
                    Ninguém mais terá acesso aos seus dados.
                </p>
            </form>
        </main>
    );
};
