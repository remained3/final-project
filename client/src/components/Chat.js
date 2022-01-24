import React, { useEffect, useState, useRef } from "react";
import "./Chat.scss";
import { io } from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const socket = io("http://localhost:8080", { query: "test=gopresh" });
socket.connect();
console.log(socket);
const Chat = () => {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);
  // http ret
  useEffect(() => {
    // socket.current = socket;
    socket.on("message", ({ name, message }) => {
      setChat((prevChat) => [...prevChat, { name, message }]);
    });
    return () => socket.disconnect();
  }, []);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    const { name, message } = state;
    socket.emit("message", { name, message });
    // console.log(socket);
    e.preventDefault();
    setState({ message: "", name });
  };
  //   const onMessageSubmit = (e) => {
  //     const { name, message } = state;
  //     socketRef.current.emit("message", { name, message });
  //     e.preventDefault();
  //     setState({ message: "", name });
  //   };

  const renderChat = () => {
    console.log(chat);
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
};

export default Chat;
