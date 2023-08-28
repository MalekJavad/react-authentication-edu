import React, { useState } from "react";

export const NotificationContext = React.createContext({
    notif: {status: false, type: '', message: ''},
    raiser: () => {},
    remover: () => {},
});

const NotificationContextProvider = (props) => {
    const [notification, setNotification] = useState({status: false, type: '', message: ''});

    const notifRemover = () => {
        setNotification({status: false, type: '', message: ''});
    }

    return (
        <NotificationContext.Provider
            value={{
                notif: notification,
                raiser: setNotification,
                remover: notifRemover,
            }}        
        >
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationContextProvider;
