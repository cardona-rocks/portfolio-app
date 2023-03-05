import { createTheme } from '@mui/material/styles';
import typography from "./typography";

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    navbarHeight: "70px",
    mobileNavbarHeight: "55px",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: "#172540",
            paper:"#2c3f59"
        },
        primary: {
            main: "#F2A444",
            contrastText: "#fff",
        },
        secondary: {
            main: "#2C394B",
            contrastText: "#fff",
        },
        text: {
            primary: "#F2F2F2",
            secondary: "rgb(200,200,200)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    ...baseTheme
});

export { darkTheme };
