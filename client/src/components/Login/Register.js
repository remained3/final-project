import React from 'react';
import { useState } from 'react';
import Button from '../Button.js'
import "./Register.scss";


function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState('');


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
    <section className="registration-container">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <div className="name">
          <input
            placeholder="Please Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
          />
        </div>
        <div className="email">
          <input
            placeholder="Please enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
        </div>
        <div className="password">
          <input
            placeholder="Please enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="text"
          />
        </div>        
        <section className="registration__validation">{error}</section>
        <section className="registration__button">
          <Button confirm>Confirm</Button>
        </section>
      </form>
    </section>
  );
}

export default Register;