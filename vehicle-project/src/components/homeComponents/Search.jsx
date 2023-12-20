import React from "react";

import {
  Container,
  Box,
  Card,
  Button,
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

import { GetI18 } from '../../functions/GetI18'

/**
 * Breakpoints xs, md, xl
 * @returns
 */
export default function Search() {

  const [t, i18n] = GetI18();
  const search = t("search", { returnObjects: true });

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
          <Grid2 container xs={12}>
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
          <Grid2 container xs={12}>
            { search.labels.map((item) => (
              // All labels of select with values.
               <SelectInput key={item} label={item} textfieldWidth={TEXTFIELD_WITH} />
            )) }

          </Grid2>
        </Box>
      </ThemeProvider>
      
      <ThemeProvider theme={themeButton}>
      <Card>
      <Button variant="contained" endIcon={<SearchIcon />}>
        { search.button }
      </Button>
      </Card>
      </ThemeProvider>
    </>
  );
}
