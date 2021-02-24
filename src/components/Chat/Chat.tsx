import React, {useEffect} from 'react';
import style from './Chat.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../redux/store";
import {addMessageThunk} from "../../redux/message-reducer";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import UsersList from "./users-list/UsersList";
import Messages from "./messages/Messages";
import {useWindowSize} from "../../common/useWindowSize";
import { BurgerMenu } from '../menu/BurgerMenu';


const Chat = () => {
    const dispatch = useDispatch();
    const userName = useSelector<AppRootType, string>(state => state.users.userName)
    const photo = useSelector<AppRootType, string>(state => state.users.photo)
    const width = useWindowSize();

    useEffect(() => {
        dispatch(addMessageThunk());
    }, [dispatch]);

    console.log("Chat");
    return (
        <div className={style.chatWrapper}>
            <Header photo={photo} login={userName}/>
            <div className={style.dialogsWrapper}>
                {width && width <= 768 ? <BurgerMenu/> : <UsersList/>}
                <div className={style.dialogs}>
                    <Messages/>
                    <Footer photo={photo} userName={userName}/>
                </div>
            </div>
        </div>
    );
};

export default Chat;