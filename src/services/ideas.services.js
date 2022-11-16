import { apiAddress } from "../utils/data/apiAddress";
import { makeAuthorization } from "../utils/functions/makeAuthorization";

export const getMyIdeas = (userToken, page) => async () => {
    const res = await fetch(apiAddress + 'ideas/?page=' + page, {
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

export const getParticipants = (userToken, ideaId, page) => async () => {
    const res = await fetch(apiAddress + 'ideas/' + ideaId + '/participants/?page=' + page, {
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

export const participate = (ideaId, fullName, instagram, phoneNumber) => async () => {
    const res = await fetch(apiAddress + 'ideas/' + ideaId + '/participants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                fullName: fullName,
                instagram: instagram,
                phoneNumber: phoneNumber
            }
        })
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.status;
    throw Error(resJson.data.error);
}