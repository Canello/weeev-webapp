import { useContext, useEffect, useState } from "react";

import './Idea.scss';

import { IdeaForms } from "./IdeaForms/IdeaForms.component";
import { MyIdea } from "./MyIdea/MyIdea.component";
import { useFetch } from '../../hooks/useFetch.hook';
import { getIdea, getParticipants } from "../../services/ideas.services";
import { UserTokenContext } from "../../contexts/UserToken.context";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner.component";
import { Spacer } from "../../components/Spacer/Spacer.component";

const LoadingIdea = () => {
    return (
        <div className='Idea loading-spinner-container'>
            <Spacer dir='y' size='xxl' />
            <LoadingSpinner />
        </div>
    );
}

const IdeaNotFound = () => {
    return (
        <>
            <Spacer dir='y' size='xxl' />
            <h1 className='font-headline-mobile-1 color-n-20'>Ideia não encontrada.</h1>
        </>
    );
}

export const Idea = () => {
    const ideaId = window.location.pathname.split('/')[2];
    const { userToken } = useContext(UserTokenContext);
    const [ requestIdea, idea, isFetchingIdea, ideaError ] = useFetch(null, true);
    const [ requestParticipants, participants, isFetchingParticipants, participantsError ] = useFetch([], true);
    const [ participantsPage, setParticipantsPage ] = useState(0);
    
    useEffect(() => {
        requestIdea(getIdea(userToken, ideaId), null, (res) => {
            if (res.is_creator) requestParticipants(getParticipants(userToken, ideaId));
        });
    }, []);
    
    
    if (isFetchingIdea) return <LoadingIdea />;
    if (!idea) return <IdeaNotFound />;
    return idea.is_creator ? <MyIdea idea={idea} participants={participants} /> : <IdeaForms idea={idea} />;
}