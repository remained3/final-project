import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.scss'

const LoginBtn = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="btnCustom" onClick={() => loginWithRedirect()}>LOGIN</button>
    )
  );
};

export default LoginBtn;
