import React from 'react';
import { useNavigate } from 'react-router-dom'

function Auth({ authenticate }) {
  const navigate = useNavigate()
  const handleOnclick = () => {
    authenticate()
    navigate('/mentors');
  }
  
  return <div></div>;
}

export default Auth;
