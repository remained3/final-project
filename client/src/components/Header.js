import React from "react";
import Btn from "./Button";

import "./styles/Header.scss";
import logo from './images/logo.svg';

import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
  const handleChange = (ev) => {
    console.log("change is", ev.target.value)
  }


  return (
    <nav className="navBar">
      
      <div className="blue-banner"></div>
      <section className="menu">
        <div className="logo">
        <img className="mentor-picture" src={logo} alt="" />
        </div>
      
         
        <button className="search-box" onClick={ () =>handleChange}>
              <Typography variant="h6">select mentor 
                <span id="icon">
                <FontAwesomeIcon icon={faCaretDown}/>
                </span>
              </Typography>
        </button> 
        <ul>
          <li><Btn bgColor={props.btnColor} name="login" /></li>
          <li><Btn bgColor={props.btnColor} name="Register"/></li>
        </ul>
      </section>

    </nav>
  );
};

export default Header;
