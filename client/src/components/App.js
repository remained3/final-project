

import React from 'react';
import MentorList from './MentorList';
import Header from './Header';
import image from './images/alison.png'
import image2 from './images/student2.png';
import image3 from './images/nana.png';
import image4 from './images/Josh.png';

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
  avatar: image2
},
{
  id: 3,
  name: "Ali Hassan", 
  Bio: "Fourth year, major in biochemistry",
  university:  "Carlton University",
  avatar: image3
},
{
  id: 3,
  name: "Josh Lee", 
  Bio: "Fourth year, major in biochemistry",
  university:  "Carlton University",
  avatar: image4
},
{
  id: 3,
  name: "Ali Hassan", 
  Bio: "Fourth year, major in biochemistry",
  university:  "Carlton University",
  avatar: image3
},
]


function App() {
  const bgColor = {backgroundColor: "#4979F5"}
  const menuBtnColor = {backgroundColor: '#E8EFFF', color: '#6E7698'}

  return (
  <>
  <Header btnColor={menuBtnColor} />
   <section className="App">
     <MentorList users={users} buttonColor={bgColor} />
  </section>
  </>
  );
}

export default App;
