import React, {useCallback} from 'react';
import style from "./Messages.module.scss";
import {MessageType, removeMessage} from "../../../redux/message-reducer";
import Message from "./message/Message";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../../redux/store";

const Messages: React.FC = () => {
    const messages = useSelector<AppRootType, Array<MessageType>>(state => state.messages.messages)
    const dispatch = useDispatch();
    const deleteMessage = useCallback((messageId: string) => {
        dispatch(removeMessage(messageId));
    }, [dispatch]);

    return (
        <div className={style.wrapper}>
            {messages.map((m) => <div key={m.id}>
                <Message
                    newImage={m.newImage}
                    photo={m.photo}
                    name={m.name}
                    message={m.message}
                    id={m.id}
                    deleteMessage={deleteMessage}/>
            </div>)}
        </div>
    );
};

export default Messages;
