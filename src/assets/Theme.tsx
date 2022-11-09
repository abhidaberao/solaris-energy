import { createTheme } from "@mui/material";

const solarisTheme = createTheme({
    palette: {
      primary: {
        main: '#84BD00',
        dark: '#00843D',
        contrastText: '#fff',
      },
      secondary: {
        main: '#00A3E0',
        dark: '#0033A0',
        contrastText: '#000',
      },
    },
  });

  export default solarisTheme;