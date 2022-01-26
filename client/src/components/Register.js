import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Button from './Button.js'
import "./Register.scss";


function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [institution, setInstitution] =useState("");
  const [mentor, setMentor]=useState(false)

  const buttonColor = {backgroundColor: '#748FFF'}
  
  const register = () => {
    axios.post("http://localhost:8080/register", {
      email,
      password,
      name,
      institution,
      mentor
    }) .then((res) => {
      console.log(res)
      window.location.href = "/";
    })
  }

  const validatation = () => {
    if (!email.length ||
      !password.length ||
      !name.length) {
      setError('Please fill out all fields');
      return false;
    }
    setError('');
    return true;
  };

  return (
    <section className="registration">
      <h2 className="title">Create Account</h2>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="name">
              <label>Name</label>
              <input
                placeholder="Your name here..."
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
              />
          </div>

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
              placeholder="Please enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="text"
            />
          </div>  

          <div className="University">
           <label>University</label>
            <input
              placeholder="University here..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="text"
            />
          </div>  

          <div className="toggle-switch">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            <h3>mentor</h3>
          </div>
           

          <input type="checkbox" id="mentor_val" name="mentor_val" value="mentor" />
          <label htmlFor="mentor_val"> I agree to <span>Use</span> the site and to <span>respect everyone</span> here on the site!</label><br></br>      
          <section className="registration__validation">{error}</section><br/>

          <Button name='sign up' bgColor={buttonColor}></Button>
      
      </form>
    </section>
  );
}

export default Register;
