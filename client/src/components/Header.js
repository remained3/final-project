import React from "react";
import NestedList from "./ListOfItems";
import Btn from "./Button";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div>
        <NestedList />
      </div>

      <div>
        <Btn>Login </Btn>
        <Btn>Logout</Btn>
      </div>
    </div>
  );
};

export default Header;
