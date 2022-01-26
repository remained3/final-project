import React, { useEffect, useState, useRef } from "react";
import "./Chat.scss";
import { io } from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const socket = io("ws://localhost:8080", { query: "test=gopresh" });
socket.connect();
// console.log(socket);
const Chat = () => {
  const [state, setState] = useState({ message: "", mentor: "", name: "" });
  const [chat, setChat] = useState([]);
  // http ret
  const [room, setRoom] = useState(socket.id);
  const [user, setUser] = useState({
    student: "",
    mentor: "",
  });
  useEffect(() => {
    let mentorsEndPoint = "http://localhost:8080/mentors";
    let studentsEndPoint = "http://localhost:8080/students";
    let mentors = axios.get(mentorsEndPoint);
    let students = axios.get(studentsEndPoint);
    axios
      .all([mentors, students])
      .then(
        axios.spread((...responses) => {
          const responseMentor = responses[0];
          const responseStudent = responses[1];
          // use/access the results
          setUser({
            student: responseStudent.data[0].name,
            mentor: responseMentor.data[0].name,
          });
          // console.log(
          //   "response Mentor & student",
          //   responseMentor.data[0].name,
          //   responseStudent.data[0].name
          // );
        })
      )
      .catch((errors) => {
        console.error(errors);
      });
  }, []);

  //end point for students

  useEffect(() => {
    //call metorI id SETSTATE --Object for name of mentors and studens
    // socket.current = socket;
    socket.on("new-message", ({ name, mentor, message }) => {
      //name , reciver, message
      // console.log("room:", room);
      console.log("new-message-recieved", name, mentor, message);
      setChat((prevChat) => [...prevChat, { name, mentor, message }]);
    });
  }, []);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { message } = state;
    const { student, mentor } = user;
    socket.emit("message", { name: student, mentor, message, room });
    // console.log("room:", room);

    // console.log(socket);
    setState({ message: "" });
  };

  const renderChat = () => {
    // console.log("chat::::", chat);
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
          <h3>{user.student}</h3>
        </div>
        {/* <div className="mentor-field">
          <TextField
            name="mentor"
            onChange={(e) => onTextChange(e)}
            value={state.mentor}
            label="Mentor"
          />
        </div>  */}
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
