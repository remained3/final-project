import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorList from "./MentorList";
import Header from "./Header";

import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import Question from "./Question";



import axios from "axios";


// css
import "./styles/App.scss";

function App() {
  const bgcolor = { backgroundColor: "#4979F5" };
  const menuBtnColor = { backgroundColor: "#E8EFFF", color: "#6E7698" };

  const [state, setState] = useState({
    users: [],
    authed: false,
    text: ''
  });
  
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/mentors')
    ]).then((all) => {
      const [mentors, questions, institutions] = all;
      setState((prev) => ({
        ...prev,
        users: mentors.data,
      }));
      
    });
    
  }, []);
  

 useEffect(() => {

 }, [])
  
  
  return (
    <Router>
    
      <Header btnColor={menuBtnColor} />
      <section className="App">
        <Routes>
          <Route
            path="/"
            element={<MentorList users={state.users} buttonColor={bgcolor} />}
          />
          
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="mentors/:id" 
            element={<Question 
              users={state.users} 
              message={state.text} 
              setMessage={setState} />} 
          />

          <Route
            path="/mentors"
            element={<MentorList users={state.users} 
            buttonColor={bgcolor} />} 
          />
          
         <Route path="*" element={<Error />} />
          
        </Routes>
      </section>
   
    </Router> 
  );
}

export default App;
