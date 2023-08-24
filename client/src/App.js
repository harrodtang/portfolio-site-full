import "./App.css";
import React from "react";
import Portfolio from "./Portfolio/Portfolio";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB703", // Set the primary color to your desired color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFB703",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFB703",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          "&.Mui-focused": {
            color: "#FFB703",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App;
