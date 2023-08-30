import React, { useState } from "react";

export const NotificationContext = React.createContext({
    notif: {status: false, type: '', message: '', animation: 'unmount'},
    raiser: () => {},
    remover: () => {},
});

const NotificationContextProvider = (props) => {
    const [notification, setNotification] = useState({status: false, type: '', message: '', animation: 'unmount'});

    const notifEliminator = () => {
        setNotification({status: false, type: '', message: '', animation: ''});
    }

    const notifRemover = (notif) => {
        if (notif) {
            console.log(notif); 
            setNotification({status: true, type: notif.type, message: notif.message, animation: 'unmount'});
        } 
        else {
            setNotification({status: true, type: notification.type, message: notification.message, animation: 'unmount'});
        }
        setTimeout(() => {
            notifEliminator();
        }, 400)
    }

    const notifRaiser = (notif) => {
        notifEliminator();
        setTimeout(() => setNotification({status: true, type: notif.type, message: notif.message, animation: 'mount'}) , 10);
        setTimeout(() => {
            if (notif)
        }, 2000);
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
