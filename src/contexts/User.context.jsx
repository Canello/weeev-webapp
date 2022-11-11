import { createContext, useContext, useEffect, useState } from "react";

import { useFetch } from "../hooks/useFetch.hook";
import { getUser } from "../services/users.services";
import { UserTokenContext } from "./UserToken.context";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [ user, setUser ] = useState(null);
    const { userToken } = useContext(UserTokenContext);
    const [ requestUser, userData, isFetchingUser ] = useFetch();
    const updateUser = () => {
        if (userToken) requestUser(getUser(userToken), null, (res) => setUser(res));
    }

    useEffect(() => {
        updateUser();
    }, [userToken]);

    const value = {
        user,
        setUser,
        isFetchingUser,
        updateUser
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}