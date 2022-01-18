import React from "react";
import Card from '@mui/material/Card';

import image from './images/alison.jpeg'
import Button from './Button';

// css
import "./MentorListItem.scss";

const user = {
  name: "Alison Becker", 
  Bio: "Fourth year, major in biochemistry",
  university:  "York University",
  avatar: image
}
const MentorListItem = (props) => {
  const bgColor = {backgroundColor: "#4979F5"}

  return (
     <section className="mentor-container">
      <img className="mentor-picture" src={user.avatar} alt="this is car image" />
      <div className="mentor-details">
        <h4>{user.name}</h4>
        <h5><span id="bio">Bio:</span>{user.Bio}</h5>
        <h5><span id="uni">University:</span>{user.university}</h5>
      </div>
      <Button name="Reach out" bgColor={bgColor}/>
     </section>
  );
};

export default MentorListItem;
