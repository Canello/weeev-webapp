import { createContext, useState } from "react";

export const UserTokenContext = createContext(null);

export const UserTokenProvider = ({ children }) => {
    const [ userToken, setUserToken ] = useState(null);
    const value = {
        userToken,
        setUserToken
    }
    return (
        <UserTokenContext.Provider value={value}>
            {children}
        </UserTokenContext.Provider>
    );
}