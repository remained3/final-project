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
import Chat from "./Chat";

function App() {
  const bgColor = { backgroundColor: "#4979F5" };
  const menuBtnColor = { backgroundColor: "#E8EFFF", color: "#6E7698" };

  const [state, setState] = useState({
    users: []});

  const [searchTerm, setSearchTerm]=useState("");
  const [searchResults, setSearchResults]=useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newMentorList = state.users.filter((mentor) => { 
      return Object.values(mentor)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
      console.log(Object.values)
    });
    setSearchResults(newMentorList)
  } else {
    setSearchResults(state.users)
  }
  }
  

  useEffect(() => {
    Promise.all([axios.get("http://localhost:8080/mentors")]).then((all) => {
      const [mentors, questions, institutions] = all;
      console.log(mentors.data);
      setState((prev) => ({
        ...prev,
        users: mentors.data,
      }));
    });
  }, []);

  return (
    <Router>
      {/* Menu Bar */}
      <Header btnColor={menuBtnColor} />
      <section className="App">
        <Routes>
          <Route
            path="/"
            element={<MentorList users={searchTerm.length < 1 ? state.users : searchResults} term={searchTerm} searchKeyword={searchHandler}/>}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/mentor" element={<Question />}>
            <Route path=":id"></Route>
          </Route>
          <Route path="/mentors/:id" element={<Chat users={state.users} />}></Route>

          {/* <Route
            path="mentors/:id"
            element={<Question users={state.users} />}
          /> */}

          <Route
            path="/mentors"
            element={<MentorList users={state.users} buttonColor={bgColor} />}
          />

          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
