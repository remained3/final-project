import React from "react";
import image from "./images/alison.png";
import "./Question.scss";
import Button from "./Button";

import {Link, useParams} from 'react-router-dom'



const user = {
  id: 1,
  name: "Alison Becker",
  Bio: "Fourth year, major in biochemistry",
  university: "York University",
  avatar: image,
  status: "available",
};
const Question = (props) => {
  const bgColor = { backgroundColor: "#4979F5" };
  console.log(useParams())

  return (
    <section className="question-container">
      <div className="pic">
        <img className="mentor-picture" src={user.avatar} alt="" />
      </div>
      <div className="question-details">
        <h4 id="name">{user.name}</h4>
        <h5>
          <span id="bio">Bio:</span>
          {user.Bio}
        </h5>
        <h5>
          <span id="uni">University:</span>
          {user.university}
        </h5>
        <h5 id="status">
          <span>status:</span>
          {user.status}
        </h5>
      </div>
      <div className="third"></div>
      <div className="tex">
        <textarea
          className="textarea"
          placeholder="Write something.."
          style={{ height: "300px", width: "300px" }}
        ></textarea>

        <Button className="btn" name="send" buttonColor={bgColor} />
        
      </div>
    </section>
  );
};

export default Question;
