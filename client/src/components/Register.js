import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


function Register(props) {
 
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    institution: "",
    mentor:false
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

    if (!user.name || !user.email || !user.password || !user.institution) {
        alert("Please fill out all parts of the form");
        return
    }
    navigate("/");
        axios.post("http://localhost:8000/register", user)
            .then((response) => {
            {
                    setCookie('user', {
                        id: response.data.response.id,
                        name: response.data.response.name,
                        email: response.data.response.email
                    }, { path: '/' })

                    navigate("/");
                }
            }) .catch(error => console.error(error))
    }


  return (
    <section className="registration">
      <h2 className="title">Create Account</h2>
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <div className="name">
              <label>Name</label>
              <input
                name="name"
                placeholder="Your name here..."
                value={user.name}
                onChange={handleChange}
                type="text"
              />
          </div>

          <div className="email">
            <label>Email</label>
            <input
              name="email"
              placeholder="Please enter your email"
              value={user.email}
              onChange={handleChange}
              type="text"
            />
          </div>

          <div className="password">
           <label>Password</label>
            <input
              name="password"
              placeholder="Please enter your password"
              value={user.password}
              onChange={handleChange}
              type="password"
            />
          </div>  

          <div className="University">
           <label>University</label>
            <input
              name="institution"
              placeholder="University here..."
              value={user.institution}
              onChange={handleChange}
              type="text"
            />
          </div>  

          <div className="toggle-switch">
            <label className="switch">
                <input type="checkbox" name="mentor"/>
                <span className="slider round"></span>
            </label>
            <h3>mentor</h3>
          </div>
           

          <input type="checkbox" id="mentor_val" name="mentor_val" value="mentor" />
          <label htmlFor="mentor_val"> I agree to <span>Use</span> the site and to <span>respect everyone</span> here on the site!</label><br></br>      
          <br/>

          <button name='sign up' type ="submit" onClick={handleSubmit}>Register</button>
      
      </form>
    </section>
  );
}

export default Register;
