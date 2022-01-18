

import React from 'react';
import MentorList from './MentorList';
import Header from './Header';
import image from './images/alison.jpeg'
import Profile from './Profile';

// css
import "./styles/App.scss";

const users  = [
  {
  id: 1,
  name: "Alison Becker", 
  Bio: "Fourth year, major in biochemistry",
  university:  "York University",
  avatar: image
},
{
  id: 2,
  name: "Maley Becker", 
  Bio: "Third year, major in compsci",
  university:  "York University",
  avatar: image
},
{
  id: 3,
  name: "Ali Hassan", 
  Bio: "Fourth year, major in biochemistry",
  university:  "Carlton University",
  avatar: image
},
]


function App() {
  const bgColor = {backgroundColor: "#4979F5"}

  return (
  <>
   <section className="App">
     <Header />
     <Profile user={1} buttonColor={bgColor} />
  </section>
  </>
  );
}

export default App;
