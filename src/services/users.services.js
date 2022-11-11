import { apiAddress } from '../utils/data/apiAddress';
import { makeAuthorization } from '../utils/functions/makeAuthorization';

export const getUserToken = (googleToken) => async () => {
    const res = await fetch(apiAddress + 'users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                googleToken: googleToken
            }
        })
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.token;
    throw Error(resJson.data.error);
}

export const getUser = (userToken) => async () => {
    const res = await fetch(apiAddress + 'users/', {
        method: 'GET',
        headers: {
            Authorization: makeAuthorization(userToken)
        }
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.user;
    throw Error(resJson.data.error);
}

export const editUser = (userToken, fullName) => async () => {
    const res = await fetch(apiAddress + 'users/', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: makeAuthorization(userToken)
        },
        body: JSON.stringify({
            data: {
                fullName: fullName
            }
        })
    });
    const resJson = await res.json();
    if (resJson.status === 'ok') return resJson.data.user;
    throw Error(resJson.data.error);
}