import React from "react";
import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PinterestIcon from "@mui/icons-material/Pinterest";

import { grey } from "@mui/material/colors";
const greyCode = grey[900];

export default function Footer() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: greyCode }}>
      <Grid2 container sx={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <Grid2 xs={6}>
          <Typography sx={{ color: "whitesmoke" }} variant="h6" component="h1">
            Unternehmen
          </Typography>
          {/* Links */}
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link style={{ color: "silver", textDecoration: "none" }} to="">
                Über uns
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Karriere
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Kontakt
              </Link>
            </li>
          </ul>
          <Typography sx={{ color: "whitesmoke" }} variant="h6" component="h1">
            Händler
          </Typography>
          {/* Links */}
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Anmelden
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Registrieren
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Händler AGB
              </Link>
            </li>
          </ul>
        </Grid2>
        <Grid2 xs={6}>
          <Typography sx={{ color: "whitesmoke" }} variant="h6" component="h1">
            Rechtliches
          </Typography>
          {/* Links */}
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link style={{ color: "silver", textDecoration: "none" }} to="">
                Impressum
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Datenschutz
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                AGB
              </Link>
            </li>
          </ul>

          <Typography sx={{ color: "whitesmoke" }} variant="h6" component="h1">
            Privat
          </Typography>
          {/* Links */}
          <ul style={{ listStyle: "none" }}>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Anmelden
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                Registrieren
              </Link>
            </li>
            <li>
              <Link to="" style={{ color: "silver", textDecoration: "none" }}>
                AGB
              </Link>
            </li>
          </ul>
        </Grid2>
      </Grid2>
      <Box display={"flex"} paddingBottom={"3rem"}>
        <FacebookIcon style={{ fill: "silver", marginRight: "0.5rem" }} />
        <TwitterIcon style={{ fill: "silver", marginRight: "0.5rem" }} />
        <InstagramIcon style={{ fill: "silver", marginRight: "0.5rem" }} />
        <LinkedInIcon style={{ fill: "silver", marginRight: "0.5rem" }} />
        <YouTubeIcon style={{ fill: "silver", marginRight: "0.5rem" }} />
        <PinterestIcon style={{ fill: "silver" }} />
      </Box>
      <p style={{ color: "whitesmoke", paddingBottom: "1rem" }}>
        <CopyrightIcon fontSize="xsmall" style={{ fill: "whitesmoke" }} />{" "}
        Copyright 2023 Hakan Orhan. Alle Rechte vorbehalten
      </p>
    </Container>
  );
}
