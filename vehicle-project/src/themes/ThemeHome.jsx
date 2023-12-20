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

/**
 * Servic card
 */
let themeServiceCard = createTheme();


/*
 * Headline theme. 
 */
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

// ---------------------------------------------------
// Theme Fast search
// ---------------------------------------------------
/* Icon Fast search components. */
themeFastSearch.components.MuiGrid2 = {
  styleOverrides: {
    root: {
      display: "flex",
      backgroundColor:'whitesmoke',
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

/* Grid of Selects in fast search */
themeSelect.components.MuiGrid2 = {
  styleOverrides: {
    root: {
      padding: "0.5rem",
      [themeFastSearch.breakpoints.up("xs")]: {},
      [themeFastSearch.breakpoints.up("sm")]: {},
      [themeFastSearch.breakpoints.up("md")]: {},
    },
  },
};

/* Selects of fast search */
themeSelect.components.MuiInputLabel = {
  styleOverrides: {
    root: {
      // Label of select
      color: "black",
      [themeFastSearch.breakpoints.up("xs")]: {},
      [themeFastSearch.breakpoints.up("sm")]: {},
      [themeFastSearch.breakpoints.up("md")]: {},
    },
  },
};

/* Button for searching */
themeButton.components.MuiButton = {
  styleOverrides: {
    root: {
      width: "100%",
      backgroundColor: "black",
      [themeFastSearch.breakpoints.up("xs")]: {
        "&:hover": {backgroundColor:('black')},
      },
      [themeFastSearch.breakpoints.up("sm")]: {},
      [themeFastSearch.breakpoints.up("md")]: {
        "&:hover": {backgroundColor:('gold')},
      },
    },
  },
};

themeButton.components.MuiCard = {
  styleOverrides: {
    root: {
      marginLeft:'1rem',
      marginRight:'1rem'
    }
  }
}

// ---------------------------------------------------
// Service card
// ---------------------------------------------------
themeServiceCard.components.MuiPaper = {
  styleOverrides: {
    root: {
      marginRight: "0.5rem",
      marginLeft: "0.5rem",
      marginTop: "1rem",
    },
  },
};



/*              padding: "0.3rem",
                backgroundColor: 'white',
                "&:focus":{backgroundColor: 'black'},
                "&:hover":{backgroundColor: 'yellowgreen'}, */

export {
  themeHeadline,
  themeFastSearch,
  themeSelect,
  themeButton,
  themeServiceCard,
};
