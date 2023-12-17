import React from "react";

import {
  Container,
  Box,
  Typography,
  IconButton,
  ThemeProvider,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import SelectInput from "../inputfields/SelectInput";

/** Search icons */
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

/** Themes for responsive design */
import {
  themeHeadline,
  themeFastSearch,
  themeSelect,
  themeButton
} from "../../themes/ThemeHome";

const COLUMN_WIDTH = 3;
const TEXTFIELD_WITH = 6;

/**
 * Breakpoints xs, md, xl
 * @returns
 */
export default function Search() {
  return (
    <>
      {/* Background image */}
      <Box
        sx={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: "url('/home.jpg')",
          height: "120px",
        }}
      >
        {/* Headline */}
        <ThemeProvider theme={themeHeadline}>
          <Typography variant="h1" textAlign="center" paddingTop="2rem">
            Finden Sie ihr nächstes.
          </Typography>
        </ThemeProvider>
      </Box>
      {/* Fast search icons */}
      <ThemeProvider theme={themeFastSearch}>
        <Box>
          <Grid2 container xs={12} sx={{ backgroundColor: "whitesmoke" }}>
            <Grid2 xs={COLUMN_WIDTH}>
              <Container
                sx={{ backgroundColor: "gold", borderBottom: "solid" }}
              >
                <IconButton>
                  <DirectionsCarIcon fontSize="large" />
                </IconButton>
              </Container>
            </Grid2>

            <Grid2 xs={COLUMN_WIDTH}>
              <Container>
                <IconButton>
                  <LocalShippingIcon fontSize="large" />
                </IconButton>
              </Container>
            </Grid2>

            <Grid2 xs={COLUMN_WIDTH}>
              <Container>
                <IconButton>
                  <AirportShuttleIcon fontSize="large" />
                </IconButton>
              </Container>
            </Grid2>

            <Grid2 xs={COLUMN_WIDTH}>
              <Container>
                <IconButton>
                  <TwoWheelerIcon fontSize="large" />
                </IconButton>
              </Container>
            </Grid2>
          </Grid2>
        </Box>
      </ThemeProvider>

      {/* Select for searching */}
      <ThemeProvider theme={themeSelect}>
        <Box>
          <Grid2 container xs={12} justifyContent="center">
            <SelectInput label="Marke" textfieldWidth={TEXTFIELD_WITH} />
            <SelectInput label="Modell" textfieldWidth={TEXTFIELD_WITH} />
            <SelectInput label="Erstzulassung" textfieldWidth={TEXTFIELD_WITH} />
            <SelectInput label="Preis" textfieldWidth={TEXTFIELD_WITH} />
            <SelectInput label="Preis" textfieldWidth={TEXTFIELD_WITH} />
            <SelectInput label="Preis" textfieldWidth={TEXTFIELD_WITH} />
          </Grid2>
        </Box>
      </ThemeProvider>
      <Box sx={{marginLeft:'1rem', marginRight:'1rem'}}>
      <ThemeProvider theme={themeButton}>
      <Button variant="contained" endIcon={<SearchIcon />}>
        Suchen
      </Button>
      </ThemeProvider>
      </Box>
    </>
  );
}
