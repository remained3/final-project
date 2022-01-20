import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import Login from "./components/Login"
import Register from "./components/Register"
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// CSS 
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
     {/* <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />} />
         <Route path="/login" element={<Login />} />
         <Route path="register" element={<Register />} />
       </Routes>
     </BrowserRouter> */}
     <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
