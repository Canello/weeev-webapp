import { createContext, useContext, useEffect, useState } from "react";

import { UserTokenContext } from "./UserToken.context";
import { useFetch } from "../hooks/useFetch";
import { getMyIdeas } from "../services/ideas.services";

export const MyIdeasContext = createContext([]);

export const MyIdeasProvider = ({children}) => {
    const [ myIdeas, setMyIdeas ] = useState([]);
    const { userToken } = useContext(UserTokenContext);
    const [ requestMyIdeas ] = useFetch();
    useEffect(() => {
        if (userToken) requestMyIdeas(getMyIdeas(userToken), null, (res) => setMyIdeas(res));
    }, [userToken]);
    const value = {
        myIdeas,
        setMyIdeas
    };
    return (
        <MyIdeasContext.Provider value={value}>
            {children}
        </MyIdeasContext.Provider>
    );
}