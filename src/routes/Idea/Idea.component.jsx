import { useContext, useEffect } from "react";

import './Idea.scss';

import { IdeaForms } from "./IdeaForms/IdeaForms.component";
import { MyIdea } from "./MyIdea/MyIdea.component";
import { useFetch } from '../../hooks/useFetch.hook';
import { getIdea, getParticipants } from "../../services/ideas.services";
import { UserTokenContext } from "../../contexts/UserToken.context";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner.component";
import { Spacer } from "../../components/Spacer/Spacer.component";

export const Idea = () => {
    const { userToken } = useContext(UserTokenContext);
    const ideaId = window.location.pathname.split('/')[2];
    const [ requestIdea, idea, isFetchingIdea, ideaError ] = useFetch(null, true);
    const [ requestParticipants, participants, isFetchingParticipants, participantsError ] = useFetch(null, true);

    useEffect(() => {
        requestIdea(getIdea(userToken, ideaId));
        requestParticipants(getParticipants(userToken, ideaId));
    }, []);
    
    if (isFetchingIdea) return (
        <div className='Idea loading-spinner-container'>
            <Spacer dir='y' size='xxl' />
            <LoadingSpinner />
        </div>
    );
    if (!idea) return <h1>Ideia não encontrada</h1>;
    return idea.is_creator ? <MyIdea /> : <IdeaForms />;
}