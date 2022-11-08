import { useEffect, useRef } from "react";

import './GoogleButton.scss';

import { Button } from "../Button/Button.component";
import { Spacer } from '../Spacer/Spacer.component';
import { getNewId } from '../../utils/getNewId';

import GoogleLogo from '../../assets/images/google-logo.svg';


export const GoogleButton = () => {
    const id = 'google-login' + getNewId();
    const googleLogin = useRef();

    const handleCredentialResponse = (response) => {
        console.log(response.credential);
    }

    useEffect(() => {
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
    }, []);

    // Botão de login com Google customizado
    // Feito colocando botão oficial do Google por cima, e setando opacity: 0
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