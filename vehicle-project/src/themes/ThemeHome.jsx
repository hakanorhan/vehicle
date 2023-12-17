import { createTheme } from "@mui/material";

/**
 * Headline Responsive.
 * h1 customize on different breakpoints xs, sm, md, lg, xl
 */
const themeHeadline = createTheme();
/**
 * Fast search icons.
 * Container customize on different breakpoints xs, sm, md, lg, xl
 */
let themeFastSearch = createTheme();
let themeSelect = createTheme();
let themeButton = createTheme();


themeHeadline.typography.h1 = {
  marginBottom: "2rem",
  [themeHeadline.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [themeHeadline.breakpoints.up("sm")]: {
    fontSize: "2.5rem",
  },
  [themeHeadline.breakpoints.up("md")]: {
    fontSize: "3.5rem",
  },
};



themeFastSearch.components.MuiGrid2 = {
  styleOverrides: {
    root: {
      display: "flex",
      /* icons in the middle */
      justifyContent: "center",
      [themeFastSearch.breakpoints.up("xs")]: {},
      [themeFastSearch.breakpoints.up("sm")]: {},
      [themeFastSearch.breakpoints.up("md")]: {},
    },
  },
};

themeFastSearch.components.MuiContainer = {
  styleOverrides: {
    root: {
      display: "flex",
      /* icons in the middle */
      justifyContent: "center",
      [themeFastSearch.breakpoints.up("xs")]: {},
      [themeFastSearch.breakpoints.up("sm")]: {},
      [themeFastSearch.breakpoints.up("md")]: {},
    },
  },
};

themeSelect.components.MuiGrid2 = {
    styleOverrides: {
      root: {
        padding:'0.5rem',
        [themeFastSearch.breakpoints.up("xs")]: {},
        [themeFastSearch.breakpoints.up("sm")]: {},
        [themeFastSearch.breakpoints.up("md")]: {},
      },
    },
  };

  themeSelect.components.MuiInputLabel = {
    styleOverrides: {
      root: {
        color:'black',
        [themeFastSearch.breakpoints.up("xs")]: {},
        [themeFastSearch.breakpoints.up("sm")]: {},
        [themeFastSearch.breakpoints.up("md")]: {},
      },
    },
  };

  /* Box margin 1rem <Box> <Button/> </Box> */
  themeButton.components.MuiButton = {
    styleOverrides: {
        root: {
            width:'100%',
            backgroundColor: 'black',
          [themeFastSearch.breakpoints.up("xs")]: {},
          [themeFastSearch.breakpoints.up("sm")]: {},
          [themeFastSearch.breakpoints.up("md")]: {},
        },
      },
  }

/*              padding: "0.3rem",
                backgroundColor: 'white',
                "&:focus":{backgroundColor: 'black'},
                "&:hover":{backgroundColor: 'yellowgreen'}, */

export { themeHeadline, themeFastSearch, themeSelect, themeButton };
