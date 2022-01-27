import React from "react";
import Btn from "./Button";

import "./styles/Header.scss";
import logo from "./images/logo.svg";

import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import LoginBtn from "./LoginBtn";
import LogoutBtn from "./LogoutBtn";

const Header = (props) => {
  const handleChange = (ev) => {
    console.log("change is", ev.target.value);
  };

  return (
    <nav className="navBar">
      <div className="blue-banner"></div>
      <section className="menu">
        <div className="logo">
          <img className="mentor-picture" src={logo} alt="" />
        </div>

        <ul>
          <Link to="/">
            <li>
              <Btn bgColor={props.btnColor} name="Home"></Btn>
            </li>
          </Link>
          <li>
            <LoginBtn bgColor={props.btnColor} name="login" />
          </li>
          <li>
            <LogoutBtn bgColor={props.btnColor} name="logout" />
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Header;
