import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {MessageType, removeMessage} from "../../../redux/message-reducer";
import {AppRootType} from "../../../redux/store";
import Message from "./message/Message";

import style from "./Messages.module.scss";

const Messages: React.FC = () => {
    const messages = useSelector<AppRootType, Array<MessageType>>(state => state.messages.messages)
    const dispatch = useDispatch();
    const deleteMessage = useCallback((messageId: string) => {
        dispatch(removeMessage(messageId));
    }, [dispatch]);
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [autoScrollIsActive, setAutoScrollIsActive] = useState<boolean>(true)

    useEffect(() => {
        if (autoScrollIsActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: "smooth"})
        }
    }, [messages])

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            !autoScrollIsActive && setAutoScrollIsActive(true)
        } else {
            autoScrollIsActive && setAutoScrollIsActive(false)
        }
    }

    return (
        <div className={style.wrapper} onScroll={scrollHandler}>
            {messages.map((m) => <div key={m.id}>
                <Message
                    newImage={m.newImage}
                    photo={m.photo}
                    name={m.name}
                    message={m.message}
                    id={m.id}
                    deleteMessage={deleteMessage}/>
            </div>)}
            <div ref={messagesAnchorRef}/>
        </div>
    );
};

export default Messages;
