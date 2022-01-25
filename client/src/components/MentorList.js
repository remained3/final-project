import React, { useRef } from "react";
import MentorListItem from "./MentorListItem";
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const MentorList = (props) => {
  const usersListParsed = props.users.map(user => (
    <MentorListItem 
      key={user.id}
      id={user.id}
      buttonColor={props.buttonColor}
      {...user}/>))
  
    
    const inputEl=useRef("")
  
    const getSearchTerm = () => {
      props.searchKeyword(inputEl.current.value)
    }


    return (
      <div>
        <div className = "search-bar">
          <input ref={inputEl} type ="text" placeholder="Search Mentors" className="prompt" value={props.term} onChange={getSearchTerm}/>
        </div>
      <ul>
        { usersListParsed }
      </ul>
      </div>
      
    )
};

export default MentorList;
