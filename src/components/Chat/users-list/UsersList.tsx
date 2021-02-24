import React from 'react';
import {removeUser, UsersType} from "../../../redux/users-reducer";
import style from './UsersList.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../../redux/store";

const UsersList: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector<AppRootType, Array<UsersType>>(state => state.users.listOfUsers)
    const removeUserHandler = (userName: string) => {
        dispatch(removeUser(userName));
    }
    return (
        <div className={style.wrapper}>
            {users.map(u => <div className={style.user} key={u.name}>
                <div className={style.image} style={{backgroundImage: `url("${u.photo}")`}}/>
                <div className={style.text}>{u.name}</div>
                <button className={style.delButton} onClick={() => removeUserHandler(u.name)}>&#10008;</button>
            </div>)}
        </div>
    );
};

export default UsersList;