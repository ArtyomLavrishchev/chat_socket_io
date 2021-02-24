import React, {ChangeEvent, useState} from 'react';
import style from './Footer.module.scss';
import {v1} from "uuid";
import socket from "../../../socket";

const Footer: React.FC<PropsType> = ({userName, photo}) => {
    const [message, setMessage] = useState<string>('');
    const [image, setImage] = useState<string | ArrayBuffer | null>('');
    const messageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);

    };
    const sendMessage = () => {
        const data = {
            id: v1(),
            name: userName,
            message: message,
            photo: photo,
            newImage: image
        };
        socket.emit('chat message', data);
        setMessage('');
        setImage('')

    };

    function encodeImageFileAsURL(element: ChangeEvent<HTMLInputElement>) {
        let file;
        if (element.currentTarget.files) {
            file = element.currentTarget.files[0];
        }
        let reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result)
        }
        file && reader.readAsDataURL(file);
    }

    return (
        <div className={style.wrapper}>
            {image && <img className={style.newImage} src={`${image}`} alt={'newImage'}/>}
            <input className={style.input} onChange={messageHandler} type={'text'} placeholder={"Message"}
                   value={message}/>
            <input type="file" name="file" id="input__file" className={style.file} onChange={encodeImageFileAsURL}/>
            <label className={style.button} htmlFor="input__file">&#10011;</label>
            <button disabled={message === '' && image === ''} className={style.button}
                    onClick={sendMessage}>&#10147;</button>
        </div>
    );
};
export default Footer;

type PropsType = {
    userName: string
    photo: string
}