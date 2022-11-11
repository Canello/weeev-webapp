import { apiAddress } from "../utils/data/apiAddress";
import { makeAuthorization } from "../utils/functions/makeAuthorization";

export const getMyIdeas = (userToken) => async () => {
    const res = await fetch(apiAddress + 'ideas/', {
        method: 'GET',
        headers: {
            Authorization: makeAuthorization(userToken)
        }
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.ideas;
    throw Error(resJson.data.error);
}

export const getIdea = (userToken, ideaId) => async () => {
    const res = await fetch(apiAddress + 'ideas/' + ideaId, {
        method: 'GET',
        headers: {
            Authorization: makeAuthorization(userToken)
        }
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.idea;
    throw Error(resJson.data.error);
}

export const getParticipants = (userToken, ideaId) => async () => {
    const res = await fetch(apiAddress + 'ideas/' + ideaId + '/participants/', {
        method: 'GET',
        headers: {
            Authorization: makeAuthorization(userToken)
        }
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.participants;
    throw Error(resJson.data.error);
}

export const createIdea = (userToken, title) => async () => {
    const res = await fetch(apiAddress + 'ideas/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: makeAuthorization(userToken)
        },
        body: JSON.stringify({
            data: {
                title: title
            }
        })
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.idea;
    throw Error(resJson.data.error);
}