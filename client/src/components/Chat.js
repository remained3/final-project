import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

function Chat({picture, text}) {
  return ( <>
    <div className="message-box">
        
        <div style={{backgroudColor:"red", 
        width: '90%', 
        display:"flex",
        flexWrap: 'wrap'}}>
    
        </div>
        <img className="message-picture" src={picture || "me"}/>
        <div>{text}</div>
    </div>
  </>
  );
}

export default Chat;
