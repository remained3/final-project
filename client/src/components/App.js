

import React from 'react';
import MentorList from './MentorList';
import image from './images/alison.jpeg'

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
     <MentorList users={users} buttonColor={bgColor} />
  </section>
  </>
  );
}

export default App;
