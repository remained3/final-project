import React from 'react';
import button from './Button.js';
import { useState, useEffect } from 'react';
import './Login.scss';
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: ""
});
const [cookies, setCookie] = useCookies(['user']);

let navigate = useNavigate();

useEffect(() => {
    if (cookies.user && cookies.user.id) {

        navigate("/");
    }
}, [cookies, navigate]);

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value })
}


const handleSubmit = (e) => {
    e.preventDefault()

    if (!user.email || !user.password) {
        alert("You must enter an email and password");
        return
    }
    navigate("/");
    if (user.email && user.password) {
        axios.post("localhost:8080/login", user)
            .then((response) => {
                if (response.data.error) {
                    alert("Unknown email/password combination. Please try again");
                    return
                }
                else {
                    setCookie('user', {
                        id: response.data.response.id,
                        firstName: response.data.response.first_name,
                        lastName: response.data.response.last_name,
                        email: response.data.response.email
                    }, { path: '/' })

                    navigate("/");
                }
            }) .catch(error => console.error(error))
      } 
  }

  

  return (
   
    <>
    <section className="login">
      <h2 className="title">Login here</h2>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        
          <div className="email">
            <label>Email</label>
            <input
            name="email"
              placeholder="Please enter your email"
              value={cookies.email}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div className="password">
           <label>Password</label>
            <input
            name="password"
              placeholder="Enter your password here"
              value={cookies.password}
              onChange={handleChange}
              type="password"
            />
          </div>  
  
          <button name='login' onClick={handleSubmit}>Login</button>
      
      </form>
    </section>
    </>
    
  
  );
};

export default Login;