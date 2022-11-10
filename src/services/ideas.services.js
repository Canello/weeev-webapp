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
    return resJson.data.ideas;
}

export const getIdea = (userToken, ideaId) => async () => {
    const res = await fetch(apiAddress + 'ideas/' + ideaId, {
        method: 'GET',
        headers: {
            Authorization: makeAuthorization(userToken)
        }
    });
    const resJson = await res.json();
    return resJson.data.idea;
}

export const getParticipants = (userToken, ideaId) => async () => {
    const res = await fetch(apiAddress + 'ideas/' + ideaId + '/participants/', {
        method: 'GET',
        headers: {
            Authorization: makeAuthorization(userToken)
        }
    });
    const resJson = await res.json();
    return resJson.data.participants;
}