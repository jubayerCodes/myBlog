import { Inter, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#ffffff",
            },
            text: {
              primary: "#000000",
              secondary: "#818181",
            },
            button: {
              main: "#007aff",
              dark: "#004eff",
            },
            divider: "#e9ecef",
          }
        : {
            background: {
              default: "#000000",
              paper: "#000000",
            },
            text: {
              primary: "#ffffff",
              secondary: "#818181",
            },
            divider: "#49494b",
          }),
    },
    overrides: {
      MuiAppBar: {
        colorInherit: {
          backgroundColor: "#689f38",
          color: "#fff",
        },
      },
    },
    props: {
      MuiAppBar: {
        color: "secondary",
      },
    },
    typography: {
      fontFamily: inter.style.fontFamily,
    },
  });

export default theme;
