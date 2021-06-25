import React from 'react';
import {useSelector} from "react-redux";

import {AppRootType} from "../../redux/store";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import UsersList from "./users-list/UsersList";
import Messages from "./messages/Messages";
import {useWindowSize} from "../../common/useWindowSize";
import {BurgerMenu} from '../menu/BurgerMenu';

import style from './Chat.module.scss'

const Chat = () => {
    const userName = useSelector<AppRootType, string>(state => state.users.userName)
    const photo = useSelector<AppRootType, string>(state => state.users.photo)
    const width = useWindowSize();

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