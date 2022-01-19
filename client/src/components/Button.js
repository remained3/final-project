import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const ButtonUi = (props) => {
  const {name, bgColor} = props;
  return <Button  variant="contained" style={bgColor}>{name}</Button>;
};

export default ButtonUi;