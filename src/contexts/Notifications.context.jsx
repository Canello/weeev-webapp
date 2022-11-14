import { createContext, useState } from "react";

export const NotificationsContext = createContext({
    participation: {
        isShowing: false,
        creatorFirstName: null
    }
});

export const NotificationsProvider = ({ children }) => {
    const [ participationIsShowing, setParticipationIsShowing ] = useState(false);
    const participationShow = () => setParticipationIsShowing(true);
    const participationHide = () => setParticipationIsShowing(false);
    const [ participationCreatorFirstName, setParticipationCreatorFirstName ] = useState(null);

    const value = {
        participation: {
            isShowing: participationIsShowing,
            show: participationShow,
            hide: participationHide,
            creatorFirstName: participationCreatorFirstName,
            setCreatorFirstName: setParticipationCreatorFirstName
        }
    };

    return (
        <NotificationsContext.Provider value={value}>
            {children}
        </NotificationsContext.Provider>
    );
}