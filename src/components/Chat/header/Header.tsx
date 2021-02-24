import React from 'react';
import style from './Header.module.scss'

const Header: React.FC<PropsType> = ({photo, login}) => {
    console.log("Header")
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