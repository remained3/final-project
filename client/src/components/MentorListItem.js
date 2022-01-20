import React from "react";
import Button from './Button';

// css
import "./styles/MentorListItem.scss";

const MentorListItem = (props) => {
  const {avatar, buttonColor, name, Bio, university} = props;
 
  return (
     <section className="mentor-container">
      <img className="mentor-picture" src={avatar} alt="" />
      <div className="mentor-details">
        <h4>{name}</h4>
        <h5><span id="bio">Bio:</span>{Bio}</h5>
        <h5><span id="uni">University:</span>{university}</h5>
      </div>
      <Button name='Reach out' bgColor={buttonColor}/>
     </section>
  );
};

export default MentorListItem;
