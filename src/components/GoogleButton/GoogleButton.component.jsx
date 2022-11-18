import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import './GoogleButton.styles.scss';

import { Button } from "../Button/Button.component";
import { Spacer } from '../Spacer/Spacer.component';
import { getNewId } from '../../utils/functions/getNewId';
import { useFetch } from "../../hooks/useFetch.hook";
import { getUserToken } from "../../services/users.services";
import { UserTokenContext } from "../../contexts/UserToken.context";

import GoogleLogo from '../../assets/images/google-logo.svg';


export const GoogleButton = () => {
    const id = 'google-login' + getNewId();
    const googleLogin = useRef();
    const [ requestUserToken ] = useFetch();
    const { setUserToken } = useContext(UserTokenContext);
    const navigate = useNavigate();
    const goToMe = () => navigate('/me');

    const handleCredentialResponse = async (response) => {
        const googleToken = response.credential;
        if (googleToken) requestUserToken(getUserToken(googleToken), null, (res) => {
            setUserToken(res);
            goToMe();
        });
    }

    const initializeGoogleLogin = () => {
        google.accounts.id.initialize({
            client_id: "890599212995-otdqmbdccnooe5ijgjvl3cbneeul4j52.apps.googleusercontent.com",
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById(id),
            {
                theme: "outline",
                size: "large",
                width: `${googleLogin.current.offsetWidth}px`
            }
        );
    }

    useEffect(() => {
        initializeGoogleLogin();
    }, []);

    // Botão de login com Google customizado
    // Colocando botão oficial do Google por cima e setando opacity: 0
    return (
        <div className='GoogleButton button-states-10 transition-10'>
            <Button className='width-100' label='Entrar com Google' variant='secondary' size='medium'>
                <Spacer dir='x' size='s' />
                <img className='google-logo' src={GoogleLogo} />
            </Button>
            <div className='google-login-container'>
                <div id={id} ref={googleLogin}></div>
            </div>
        </div>
    );
}