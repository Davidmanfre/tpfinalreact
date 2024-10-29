import { CreateTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#008CBA",
    },
    secondary: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
