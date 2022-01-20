import React from 'react';
import { useState } from 'react';
import Login from './Login';

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
    <section className="registration">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <div className="name">
          <input
            placeholder="Please Enter Your Name"
            value={name}
            onChange={(event) => setDetails(event.target.value)}
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
          <Button danger onClick={() => cancel()}>Cancel</Button>
          <Button confirm onClick={() =>
            createAccount(email, password, name)}>Confirm</Button>
        </section>
      </form>
    </section>
  );
}

export default Register;
