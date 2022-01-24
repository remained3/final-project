import React from "react";
import MentorListItem from "./MentorListItem";
import { Outlet } from "react-router-dom";

const MentorList = (props) => {
  const usersListParsed = props.users.map(user => (
    <MentorListItem 
      key={user.id}
      id={user.id}
      buttonColor={props.buttonColor}
      {...user}/>))
    return (
      <ul>
        { usersListParsed }
      </ul>
      
    )
};

export default MentorList;
