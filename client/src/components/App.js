import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MentorList from "./MentorList";
import Header from "./Header";
import image from "./images/alison.png";
import image2 from "./images/student2.png";
import image3 from "./images/nana.png";
import image4 from "./images/Josh.png";
import Login from "./Login";
import Register from "./Register";
import Error from "./Error";
import Question from "./Question";



import axios from "axios";


// css
import "./styles/App.scss";

function App() {
  const bgColor = { backgroundColor: "#4979F5" };
  const menuBtnColor = { backgroundColor: "#E8EFFF", color: "#6E7698" };

  const [state, setState] = useState({
    users: [],
    authed: false
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

 
  
  
  return (
    <Router>
    
      <Header btnColor={menuBtnColor} />
      <section className="App">
        <Routes>
          <Route
            path="/"
            element={<MentorList users={state.users} buttonColor={bgColor} />}
          />
          
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="mentors/:id" 
            element={<Question users={state.users} />} 
          />

          <Route
            path="/mentors"
            element={<MentorList users={state.users} 
            buttonColor={bgColor} />} 
          />
          
         <Route path="*" element={<Error />} />
          
        </Routes>
      </section>
   
    </Router> 
  );
}

export default App;
