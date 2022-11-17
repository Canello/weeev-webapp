import { useContext, useEffect, useState } from "react";

import './Idea.scss';

import { IdeaForms } from "./IdeaForms/IdeaForms.component";
import { MyIdea } from "./MyIdea/MyIdea.component";
import { useFetch } from '../../hooks/useFetch.hook';
import { getIdea, getParticipants } from "../../services/ideas.services";
import { UserTokenContext } from "../../contexts/UserToken.context";
import { LoadingSpinner } from "../../components/LoadingSpinner/LoadingSpinner.component";
import { Spacer } from "../../components/Spacer/Spacer.component";
import { hasReachedEndOfPage } from "../../utils/functions/hasReachedEndOfPage";
import { canScroll } from '../../utils/functions/canScroll';

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
    const [ requestParticipants, participantsData, isFetchingParticipants, participantsError ] = useFetch([], true);
    const [ participants, setParticipants ] = useState([]);
    const [ participantsPage, setParticipantsPage ] = useState(0);
    const [ shouldRequest, setShouldRequest ] = useState(true);

    const updateParticipants = () => {
        requestParticipants(
            getParticipants(userToken, ideaId, participantsPage),
            null,
            (res) => {
                if (res.length === 0) setShouldRequest(false);
                setParticipantsPage(participantsPage + 1);
                setParticipants([...participants, ...res]);
            },
            () => setShouldRequest(false)
        );
    }

    const updateParticipantsIfHasReachedEndOfPage = () => {
        if (!shouldRequest || isFetchingParticipants) return;
        if (hasReachedEndOfPage()) updateParticipants();
    }

    const updateParticipantsIfCantScroll = () => {
        if (!shouldRequest || isFetchingParticipants) return;
        if (!canScroll()) updateParticipants();
    }
    
    useEffect(() => {
        requestIdea(getIdea(userToken, ideaId), null, (res) => {
            if (res.is_creator) updateParticipants();
        });
    }, []);

    useEffect(() => {
        if (!idea?.is_creator) return;
        updateParticipantsIfCantScroll();
        window.onscroll = updateParticipantsIfHasReachedEndOfPage;
        return () => {
            window.onscroll = null;
        }
    }, [idea, isFetchingParticipants]);
    
    
    if (isFetchingIdea) return <LoadingIdea />;
    if (!idea) return <IdeaNotFound />;
    return idea.is_creator ? <MyIdea idea={idea} participants={participants} /> : <IdeaForms idea={idea} />;
}