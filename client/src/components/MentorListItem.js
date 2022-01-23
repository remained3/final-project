import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// css
import "./styles/MentorListItem.scss";

const MentorListItem = (props) => {
  const {picture, buttonColor, name, bio, institution, id} = props;
 
  return (
     <section className="mentor-container">
      <img className="mentor-picture" src={picture} alt="" />
      <div className="mentor-details">
        <h4>{name}</h4>
        <h5><span id="bio">specialization:</span>{bio}</h5>
        <h5><span id="uni">University:</span>{institution}</h5>
      </div>
      <Link to={`mentors/${id}`} >
        <Button name='Reach out' bgColor={buttonColor}></Button>
      </Link>
    </section>
  );
};

export default MentorListItem;
