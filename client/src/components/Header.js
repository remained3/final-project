import React from "react";
import Btn from "./Button";
import "./Header.scss";
import ListOfItems from "./ListOfItems";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#758fff",
    },
  },
});
const Header = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar
          sx={{
            height: 20,
            position: "static",
          }}
        ></AppBar>
      </ThemeProvider>
      <header className="header">
        <nav>
          <div>
            <svg
              width="67"
              height="61"
              viewBox="0 0 67 61"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="51.441"
                width="60.4255"
                height="51.4433"
                transform="rotate(89.4572 51.441 0)"
                fill="#6E7698"
              />
              <rect
                x="67.0001"
                y="8.05444"
                width="44.2094"
                height="48.1602"
                transform="rotate(90.9548 67.0001 8.05444)"
                fill="#CFD7FB"
              />
            </svg>
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
