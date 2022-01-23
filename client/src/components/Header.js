import React from "react";
import Btn from "./Button";

import "./styles/Header.scss";
import logo from './images/logo.svg';

import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom'

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
          
          <span id="icon">
            <FontAwesomeIcon icon={faSearch}/>
          </span>
        </form> 

        <ul>
          <Link to="/">
            <li><Btn bgColor={props.btnColor} name="Home"></Btn></li>
          </Link>
          <Link to="/login">
            <li><Btn bgColor={props.btnColor} name="login"></Btn></li>
          </Link>
          
          <Link to="/register">
            <li><Btn bgColor={props.btnColor} name="Register"/></li>
          </Link>
        </ul>
      </section>

    </nav>
  );
};

export default Header;
