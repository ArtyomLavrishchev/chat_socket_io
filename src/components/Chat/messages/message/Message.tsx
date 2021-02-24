import React from "react";
import style from "./Message.module.scss"


type MessageType = {
    photo: string
    name: string
    message: string
    id: string
    newImage: string
    deleteMessage: (id: string) => void
}

const Message: React.FC<MessageType> = (
    {photo, name, message, id, deleteMessage, newImage}) => {
    return (
        <div className={style.message}>
            <div className={style.photo} style={{backgroundImage: `url("${photo}")`}}/>
            <div className={style.cloud}>
                <div className={style.triangle}/>
                <div className={style.messageBox}>
                    <div className={style.name}>{name}</div>
                    <div className={style.messageBody}>
                        {newImage && <img className={style.newImage} src={`${newImage}`} alt={'newImage'}/>}
                        {message}
                    </div>
                </div>
            </div>
            <button className={style.deleteBtn} onClick={() => deleteMessage(id)}>&#10008;</button>
        </div>
    );
};

export default React.memo(Message);
