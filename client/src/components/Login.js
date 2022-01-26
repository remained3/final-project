import React from 'react';
import Button from './Button.js';
import { useState } from 'react';
import './Login.scss';
import axios from 'axios';

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedUser, setLoggedUser] = useState("");

  const login = () => {
    axios.post("http://localhost:8000/login", {
      email,
      password,
    }).then((res) => {
      console.log(res)
      setLoggedUser(res.data);
      const user = JSON.stringify(res.data);
      localStorage.setItem("userID", user);
      window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
      window.alert("Incorrect email or password");
  })
};
  const buttonColor = {backgroundColor: '#748FFF'}
  

  return (
   
    <>
    <section className="login">
      <h2 className="title">Login here</h2>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        
          <div className="email">
            <label>Email</label>
            <input
              placeholder="Please enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
            />
          </div>

          <div className="password">
           <label>Password</label>
            <input
              placeholder="Enter your password here"
              value={password}
              onChange={evt => setPassword(evt.target.value)}
              type="text"
              onSubmit={login}
            />
          </div>  
  
          <Button name='login' bgColor={buttonColor} type="submit" onClick={login}></Button>
      
      </form>
    </section>
    </>
    
  
  );
};

export default Login;
