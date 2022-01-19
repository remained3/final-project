import React from "react";
import image from "./images/alison.png";
import "./Question.scss";
import Button from "./Button";

const user = {
  id: 1,
  name: "Alison Becker",
  Bio: "Fourth year, major in biochemistry",
  university: "York University",
  avatar: image,
};
const Question = (props) => {
  const bgColor = { backgroundColor: "#4979F5" };

  return (
    <section className="question-container">
      <img className="mentor-picture" src={user.avatar} alt="" />
      <div className="question-details">
        <h4>{user.name}</h4>
        <h5>
          <span id="bio">Bio:</span>
          {user.Bio}
        </h5>
        <h5>
          <span id="uni">University:</span>
          {user.university}
        </h5>
      </div>
      <div></div>
      <div class="col-75">
        <textarea
          className="textarea"
          placeholder="Write something.."
          style={{ height: "300px", width: "300px" }}
        >
          <Button buttonColor={bgColor} />
        </textarea>
      </div>
    </section>
  );
};

export default Question;
