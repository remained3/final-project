import React from "react";
import Btn from "./Button";

import "./styles/Header.scss";
import logo from './images/logo.svg';

import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@mui/material';

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
      
         
        <form className="search-box">
          <input id="my-input" placeholder="mentor name..." />
          <span>
            
          </span>
        </form> 

        <ul>
          <li><Btn bgColor={props.btnColor} name="login" /></li>
          <li><Btn bgColor={props.btnColor} name="Register"/></li>
        </ul>
      </section>

    </nav>
  );
};

export default Header;
