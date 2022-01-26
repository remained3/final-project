import React, { useEffect, useState } from "react";
import image from "./images/alison.png";
import "./Question.scss";
import Chat from './Chat'
import Error from "./Error";
import socketio from 'socket.io-client';
import {Link, useParams} from 'react-router-dom'

const ENDPOINTS = 'http://localhost:8080';
const temp = {"name":"Alison Becker","email":"alibec@gmail.com","password":"myPassword","picture":"https://i.postimg.cc/y8CLqRr5/unsplash-h58g-EQi1-Yss-2x.png","bio":"JS, React","mentor":false,"institution_id":2,"last_active":"2022-01-15T05:00:00.000Z","university":"UBC"};





const Question = ({users, message, setMessage, socket}) => {

  // const {users} = props;
  const buttonColor = {backgroundColor: '#748FFF'};

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   setMessage(prev => ({...prev, text: ''}));
  //   //  const newSocket = socketio(ENDPOINTS);
  //   // setSocket(newSocket);
  //   socket.emit("message", {message: message, mentorId:selectedMentorId, sender: tempUser})
  
  //   return () => socket.close();

  // };

 const  [msg, setMsg] = useState([])

  useEffect( () => {
    socket.on("respond", data => {
      if (data) {
        setMsg(() => data)
      }
     
    });
     return () => socket.close();
  }, [])

 
  const handleChange = e => {
    setMessage(prev => ({...prev, text: e.target.value}));
   
  }

  let selectedMentorId = parseInt(useParams().id)
  const selectedMentor = users.filter(user => user.id === selectedMentorId);
  if (!selectedMentor[0]){
    return (<><Error/></>)
  }

  const {picture, name, bio, institution,last_active, id} = selectedMentor[0];

  const handleSubmit = e => {
    e.preventDefault();
    setMessage(prev => ({...prev, text: ''}));
    socket.emit("message", {message: message, mentor: name, sender: temp.picture})
    
    return () => socket.close();

  };

  

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
        
          <Chat picture={msg.sender} text={msg.message}/>

          <div className="text">
            <form onSubmit={ e => e.preventDefault()}>
              <input
                className="textarea"
                placeholder="Write something.."
                
                value={message}
                onChange={handleChange}
                > 
              </input>
      
            </form>
          </div>
         
          <button
          className="btnCustom" 
          name="send" 
          bgcolor={buttonColor} 
          onClick={handleSubmit}> 
            <h4>SEND</h4>
          </button>
      </div> 
    </section>
  );
};

export default Question;
