import { createContext, useContext, useEffect, useState } from "react";

import { UserTokenContext } from "./UserToken.context";
import { useFetch } from "../hooks/useFetch.hook";
import { getMyIdeas } from "../services/ideas.services";

export const MyIdeasContext = createContext([]);

export const MyIdeasProvider = ({children}) => {
    const { userToken } = useContext(UserTokenContext);

    const [ myIdeas, setMyIdeas ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ currentPage, setCurrentPage ] = useState(1);

    const [ requestMyIdeas ] = useFetch();

    const updateMyIdeas = (page) => {
        // page - 1 porque no back-end começa em 0 e no front-end, em 1.
        if (userToken) requestMyIdeas(getMyIdeas(userToken, page - 1), null, (res) => {
            setMyIdeas(res.ideas);
            setTotalPages(res.total_pages);
            setCurrentPage(page);
        });
    }

    const resetPage = () => setCurrentPage(1);

    useEffect(() => {
        updateMyIdeas(1);
    }, [userToken]);

    const value = {
        myIdeas,
        setMyIdeas,
        updateMyIdeas,
        currentPage,
        resetPage,
        totalPages
    };

    return (
        <MyIdeasContext.Provider value={value}>
            {children}
        </MyIdeasContext.Provider>
    );
}