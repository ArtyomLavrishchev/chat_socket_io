import React, {useEffect} from 'react';
import {addUserToTheList} from '../../../redux/users-reducer';
import style from './Header.module.scss'
import {useDispatch} from "react-redux";

const Header: React.FC<PropsType> = ({photo, login}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(addUserToTheList({name: login, photo: photo}))
    }, [])
    return (
        <header className={style.wrapper}>
            <div>
                <span className={style.icon}>&#x2709;</span>
            </div>
            <div className={style.user}>
                <span className={style.text}>{login}</span>
                <div className={style.image} style={{backgroundImage: `url("${photo}")`}}/>
            </div>
        </header>
    );
};

export default Header;

type PropsType = {
    photo: string
    login: string
}