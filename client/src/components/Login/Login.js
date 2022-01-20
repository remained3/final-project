import React from 'react';
import { useState } from 'react';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
  <form autoComplete="off" onSubmit={event => event.preventDefault()}>
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
      </form>

      )
}

export default Login;