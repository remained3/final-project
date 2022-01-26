import React, { useEffect, useState } from "react";
import image from "./images/alison.png";
import "./Question.scss";
import Button from "./Button";
import io from "socket.io-client";
import { Link, useParams } from "react-router-dom";

const Question = (props) => {
  const buttonColor = { backgroundColor: "#748FFF" };
  const { users } = props;

  let selectedMentorId = parseInt(useParams().id);
  const selectedMentor = users.filter((user) => user.id === selectedMentorId);
  if (!selectedMentor[0]) {
    return;
  }
  const { picture, name, bio, institution, last_active, id } =
    selectedMentor[0];

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
          <textarea
            className="textarea"
            placeholder="Write something.."
            style={{ height: "300px", width: "300px" }}
          ></textarea>
        </div>
        <Button className="btn" name="send" bgColor={buttonColor} />
      </div>
    </section>
  );
};

export default Question;
