import React, {useEffect, useState} from 'react';
import './App.scss';
import Chat from "./components/Chat/Chat";
import Greet from "./components/Greet/Greet";
import {getPhoto, setUser} from "./redux/users-reducer";
import {nameGenerator} from "./common/name-generator";
import {useDispatch} from "react-redux";

const App = () => {
    const [join, setJoin] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUser(nameGenerator()));
        dispatch(getPhoto())
    }, [dispatch]);

    const joinHandler = () => {
        setJoin(true)
    };

    return (
        <div className="App">
            {!join? <Greet joinHandler={joinHandler}/> : <Chat/>}
        </div>
    );
};
export default App;