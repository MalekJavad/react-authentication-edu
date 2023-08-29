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

    const notifRaiser = (notif) => {
        notifRemover();
        setTimeout(() => setNotification({status: notif.status, type: notif.type, message: notif.message}) , 10);
        setTimeout(() => {notifRemover()}, 2000);
    }

    return (
        <NotificationContext.Provider
            value={{
                notif: notification,
                raiser: notifRaiser,
                remover: notifRemover,
            }}        
        >
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationContextProvider;
