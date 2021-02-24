import React from 'react';
import styles from './Greet.module.scss'

type GreetType = {
    joinHandler: () => void
}

const Greet: React.FC<GreetType> = ({joinHandler}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.text}>Добро пожаловать в чат!</div>
            <button className={styles.button} onClick={joinHandler}>Войти в комнату</button>
        </div>
    );
};

export default Greet;