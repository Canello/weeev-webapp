import { createContext, useContext, useEffect, useState } from "react";

import { UserTokenContext } from "./UserToken.context";
import { useFetch } from "../hooks/useFetch.hook";
import { getMyIdeas } from "../services/ideas.services";

export const MyIdeasContext = createContext([]);

export const MyIdeasProvider = ({children}) => {
    const [ myIdeas, setMyIdeas ] = useState([]);
    const { userToken } = useContext(UserTokenContext);
    const [ requestMyIdeas ] = useFetch();
    const updateMyIdeas = () => {
        if (userToken) requestMyIdeas(getMyIdeas(userToken), null, (res) => setMyIdeas(res));
    }

    useEffect(() => {
        updateMyIdeas();
    }, [userToken]);

    const value = {
        myIdeas,
        setMyIdeas,
        updateMyIdeas
    };

    return (
        <MyIdeasContext.Provider value={value}>
            {children}
        </MyIdeasContext.Provider>
    );
}