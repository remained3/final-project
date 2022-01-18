import React from "react";
import Mentor from "./MentorListItem";
import Header from "./Header";

// css
import "./App.scss";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="App">
        <Mentor />
      </section>
    </>
  );
}

export default App;
