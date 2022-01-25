import React, { useEffect, useState } from "react";
import image from "./images/alison.png";
import "./Question.scss";
import Button from "./Button";
import Error from "./Error";
import socketio from 'socket.io-client';
import {Link, useParams} from 'react-router-dom'

const ENDPOINTS = 'http://localhost:8080';


const Question = (props) => {


  const [socket, setSocket] = useState(null); 

  const {users} = props;
  const buttonColor = {backgroundColor: '#748FFF'};

  const handleSubmit = e => {
    e.preventDefault();
    props.setMessage(prev => ({...prev, text: ''}));
     const newSocket = socketio(ENDPOINTS);
    setSocket(newSocket);
    newSocket.emit("message", {message: props.message})
  
    return () => newSocket.close();

  };

  const handleChange = e => {
    props.setMessage(prev => ({...prev, text: e.target.value}));
   
  }

  let selectedMentorId = parseInt(useParams().id)
  const selectedMentor = users.filter(user => user.id === selectedMentorId);
  if (!selectedMentor[0]){
    return (<><Error/></>)
  }

  const {picture, name, bio, institution,last_active, id} = selectedMentor[0];



  return (
    <section className="question-container">
      <div className="pic">
        <img className="mentor-picture" src={picture} alt="" />
      </div>

      <div className="details-textContainer">
          <div className="question-details">
            <h4 id="name">{name}</h4>
            <h5>
              <span id="bio">Bio:</span>
              {bio}
            </h5>
            <h5>
              <span id="uni">University:</span>
              {institution}
            </h5>
            <h5>
              <span id="status">status:</span>
              {last_active}
            </h5>
          </div>


          <div className="text">
            <form onSubmit={ e => e.preventDefault()}>
              <input
                className="textarea"
                placeholder="Write something.."
                style={{ height: "50px", width: "250px" }}
                value={props.message}
                onChange={handleChange}
                > 
              </input>
      
            </form>
          </div>
          {/* <Button
            className="btn" 
            name="send" 
            bgColor={buttonColor} 
            onClick= { handleSubmit }
          /> */}

            <button
            className="btnCustom" 
            name="send" 
            bgcolor={buttonColor} 
            onClick={handleSubmit}> 
             <h4>SEND</h4>
            </button>
      </div>

      <div className="message-box">
        Chats
        <div style={{backgroudColor:"red", 
        width: '90%', 
        display:"flex",
        flexWrap: 'wrap'}}>
        {props.message}
        </div>
      </div>
     
    </section>
  );
};

export default Question;
