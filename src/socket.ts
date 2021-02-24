import io from 'socket.io-client';

const socket = io("https://socketiochat-server.herokuapp.com/");

export default socket;