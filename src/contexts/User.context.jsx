import { createContext, useContext, useEffect, useState } from "react";

import { useFetch } from "../hooks/useFetch";
import { getUser } from "../services/users.services";
import { UserTokenContext } from "./UserToken.context";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const { userToken } = useContext(UserTokenContext);
    const [ requestUser ] = useFetch();
    useEffect(() => {
        if (userToken) requestUser(getUser(userToken), null, (res) => setUser(res));
    }, [userToken]);
    const value = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}