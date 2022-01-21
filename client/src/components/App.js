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
import Profile from "./Profile";
<<<<<<< HEAD
import Mentor from "./Question";
import axios from "axios";
=======
import Mentor from "./Question"

import axios from 'axios'
import { useState, useEffect } from 'react';

>>>>>>> connect/connect-to-db
// css
import "./styles/App.scss";

const users2 = [
  {
    id: 1,
    name: "Alison Becker",
    Bio: "Fourth year, major in biochemistry",
    university: "York University",
    avatar: image,
  },
  {
    id: 52,
    name: "Maley Becker",
    Bio: "Third year, major in compsci",
    university: "York University",
    avatar: image2,
  },
  {
    id: 3,
    name: "Ali Hassan",
    Bio: "Fourth year, major in biochemistry",
    university: "Carlton University",
    avatar: image3,
  },
  {
    id: 4,
    name: "Josh Lee",
    Bio: "Fourth year, major in biochemistry",
    university: "Carlton University",
    avatar: image4,
  },
  {
    id: 5,
    name: "Ali Hassan",
    Bio: "Fourth year, major in biochemistry",
    university: "Carlton University",
    avatar: image3,
  },
];

function App() {
  const bgColor = { backgroundColor: "#4979F5" };
  const menuBtnColor = { backgroundColor: "#E8EFFF", color: "#6E7698" };

<<<<<<< HEAD
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);
=======
  useEffect(() => {
    axios.get('http://localhost:8080/mentors').then(res => console.log(res.data))
  }, [])
  return (
>>>>>>> connect/connect-to-db

  return (
    <Router>
      <Header btnColor={menuBtnColor} />
      <section className="App">
        <Routes>
          <Route
            path="/"
            element={<MentorList users={users} buttonColor={bgColor} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/mentor" element={<Mentor />}>
            <Route path=":id"></Route>
          </Route>

          <Route
            path="/mentors"
            element={<MentorList users={users} buttonColor={bgColor} />}
          >
            <Route path=":id" element={<Mentor />} />
          </Route>
        </Routes>
      </section>
    </Router>
  );
}

export default App;
