import React from "react";
import "./Confirmation.scss";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import image from "./images/alison.jpeg";

const user = {
  name: "Alison Becker",
  avatar: image,
};
const Confirmation = (props) => {
  return (
    <section className="confirm-container">
      <div className="confirm-details">
        <img
          className="confirm-picture"
          src={user.avatar}
          alt="this is mentor image"
        />

        <h4>{user.name}</h4>
        <CheckBoxIcon
          sx={{
            fill: "#4979f5",
            fontSize: "100px",
          }}
        />
        <h3>Your question is sent!</h3>
      </div>
    </section>
  );
};

export default Confirmation;
