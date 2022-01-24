import React from 'react';
import { Link } from "react-router-dom";
function Error() {
  const styleObject = { 
    height: '80vh',
    width: '100%',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    fontWeight: '700',
    fontSize: '2.5em',
    color: "#FF2E36",
    flexDirection: "column"
    
  }

 const spanStyle = {
   textDecoration: "none",
  }


  return <div style={styleObject}>
          Error 404: NotFound <br></br>
          <Link style={{color:"#748FFF", marginTop:".5em"}} to="/"> Return Home </Link>
          </div>;
}

export default Error;
