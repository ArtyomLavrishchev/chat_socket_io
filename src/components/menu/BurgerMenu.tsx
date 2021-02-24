import React, {useState} from "react";
import style from "./BurgerMenu.module.scss"
import UsersList from "../Chat/users-list/UsersList";

export const BurgerMenu = React.memo(() => {
    const [checked, setChecked] = useState(false);

    const activeMenuClass = `${checked ? style.burgerMenuActive : ''} ${style.burgerMenu}`

    return (
        <div className={activeMenuClass}>
            <div onClick={() => setChecked(!checked)} className={style.burgerMenuButton}>
                <span className={style.burgerMenuLines}/>
            </div>
            <div className={style.burgerMenuNav}>
                <UsersList/>
            </div>
        </div>
    )
});
