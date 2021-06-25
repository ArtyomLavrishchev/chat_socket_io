import io from 'socket.io-client';
import {AnyAction, Dispatch, MiddlewareAPI, Action} from "redux";

import {addUserToTheList} from "./redux/users-reducer";
import {addMessage, MessageType} from "./redux/message-reducer";

const socket = io("https://socketiochat-server.herokuapp.com/");
// const socket = io("http://localhost:8080/");

export const socketIoMiddleware = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => {
    socket.on('chat message', (msg: MessageType) => {
        store.dispatch(addMessage(msg));
        store.dispatch(addUserToTheList({name: msg.name, photo: msg.photo}))
        }
    );

    return (action: Action) => {
        next(action);
    }
}

export default socket;