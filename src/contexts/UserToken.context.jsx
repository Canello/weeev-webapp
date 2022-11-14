import { createContext, useEffect, useState } from "react";

export const UserTokenContext = createContext(null);

export const UserTokenProvider = ({ children }) => {
    const [ userToken, setUserToken ] = useState(null);
    const [ triedToGetUserTokenFromLocalStorage, setTriedToGetUserTokenFromLocalStorage ] = useState(false);

    const clearUserToken = () => localStorage.removeItem('userToken');

    useEffect(() => {
        const currentUserToken = window.localStorage.getItem('userToken');
        if (currentUserToken) setUserToken(currentUserToken);
        setTriedToGetUserTokenFromLocalStorage(true);
    }, []);
    
    useEffect(() => {
        if (userToken) window.localStorage.setItem('userToken', userToken);
    }, [userToken]);

    const isLoadingUserToken = !userToken && !triedToGetUserTokenFromLocalStorage;

    const value = {
        userToken,
        setUserToken,
        isLoadingUserToken,
        clearUserToken
    }

    return (
        <UserTokenContext.Provider value={value}>
            {children}
        </UserTokenContext.Provider>
    );
}