import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e9efff",
    },
  },
});

const Btn = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" variant="contained">
        {props.children}
      </Button>
    </ThemeProvider>
  );
};

export default Btn;
