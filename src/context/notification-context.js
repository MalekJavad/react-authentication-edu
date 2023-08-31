import React, { useRef, useState } from "react";

export const NotificationContext = React.createContext({
    notif: {status: false, type: '', message: '', animation: 'unmount'},
    raiser: () => {},
    remover: () => {},
});

const NotificationContextProvider = (props) => {
    const [notification, setNotification] = useState({status: false, type: '', message: '', animation: 'unmount'});
    const autoDelete = useRef(null);

    const notifEliminator = () => {
        setNotification({status: false, type: '', message: '', animation: ''});
    };

    const notifRemover = (notif) => {
        autoDelete.current = false;
        setNotification({status: true, type: notif.type, message: '', animation: 'unmount'});
        setTimeout(() => {
            notifEliminator();
        }, 400);
    };

    const notifRaiser = (notif) => {
        autoDelete.current = true;
        notifEliminator();
        setTimeout(() => setNotification({status: notif.status, type: notif.type, message: notif.message, animation: 'mount'}) , 10);
        setTimeout(() => {
            if (autoDelete.current) {
                notifRemover(notif);
            }
        }, 2000);
    };

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
