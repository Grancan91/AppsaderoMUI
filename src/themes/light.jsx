import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#689F38",
    },
    secondary: {
      main: "#795548",
    },
    background: {
      default: "#712c7f",
    },
    text: {
      primary: "#689F38",
      secondary: "#795548",
   },    
  },
});