import React from "react";
import Btn from "./Button";
import "./Header.scss";
import ListOfItems from "./ListOfItems";
const Header = () => {
  return (
    <>
      <div></div>
      <header className="header">
        <nav>
          <div>
            <img src={<img src="https://unsplash.it/40/40" />} />
          </div>
          <div className="btns">
            <Btn className="btn">Login</Btn>
            <Btn className="btn">Register</Btn>
          </div>
        </nav>
      </header>
      <ListOfItems />
    </>
  );
};

export default Header;
