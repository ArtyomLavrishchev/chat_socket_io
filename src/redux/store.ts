import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {usersReducer} from "./users-reducer";
import {messageReducer} from "./message-reducer";
import {socketIoMiddleware} from "../socket";

const rootReducer = combineReducers({
    users: usersReducer,
    messages: messageReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware, socketIoMiddleware)
});

export type AppRootType = ReturnType<typeof rootReducer>