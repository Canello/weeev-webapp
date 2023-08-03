import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Settings.styles.scss";

import { Spacer } from "../../components/Spacer/Spacer.component";
import { Input } from "../../components/Input/Input.component";
import { Button } from "../../components/Button/Button.component";
import { UserContext } from "../../contexts/User.context";
import { useFetch } from "../../hooks/useFetch.hook";
import { UserTokenContext } from "../../contexts/UserToken.context";
import { editUser } from "../../services/users.services";

export const Settings = () => {
    const { user, updateUser, clearUser } = useContext(UserContext);
    const { userToken, clearUserToken } = useContext(UserTokenContext);
    const [fullName, setFullName] = useState(user?.full_name ?? "");
    const navigate = useNavigate();
    const goToMe = () => navigate("/me");
    const goToLandingPage = () => navigate("/");
    const [requestEditUser, editedUser, isFetchingEditedUser] = useFetch();

    const onSubmit = (event) => {
        event.preventDefault();
        requestEditUser(editUser(userToken, fullName), null, (res) => {
            updateUser();
            goToMe();
        });
    };

    const logout = () => {
        clearUserToken();
        clearUser();
        goToLandingPage();
    };

    return (
        <main className="Settings page">
            <Spacer dir="y" size="xl" />
            <p className="body-2 color-n-30">
                Hm, não tem muito o que configurar...
            </p>
            <Spacer dir="y" size="m" />
            <form>
                <Input
                    className="width-100"
                    value={fullName}
                    setValue={setFullName}
                    label="Seu nome"
                />
                <Spacer dir="y" size="m" />
                <div className="flex flex-1">
                    <Button
                        type="button"
                        className="flex-1"
                        label="Cancelar"
                        variant="tertiary"
                        size="medium"
                        onClick={goToMe}
                    />
                    <Spacer dir="x" size="m" />
                    <Button
                        className="flex-1"
                        label="Editar"
                        variant="primary"
                        size="medium"
                        onClick={onSubmit}
                    />
                </div>
            </form>
            <Spacer dir="y" size="xl" />
            <div className="center">
                <div className="horizontal-line" />
                <div className="or-container center">
                    <p className="font-body-2 color-n-40">OU</p>
                </div>
                <div className="horizontal-line" />
            </div>
            <Spacer dir="y" size="xl" />
            <Button
                label="Sair"
                variant="tertiary"
                size="medium"
                onClick={logout}
            />
            <Spacer dir="y" size="xl" />
        </main>
    );
};
