import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { GetI18 } from "../../functions/GetI18";

import { Link } from "react-router-dom";

export default function NavbarLinks() {
  const [t, i18n] = GetI18();
  const header = t("header", { returnObjects: true });

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {header.navbarLinks.map((page) => (
        <Link
        to='/home'
          key={page}
          style={{
            my: 2,
            color: "white",
            display: "block",
            fontSize: "1rem",
            fontFamily: "Roboto",
            textDecoration: "none",
            padding: "0.5rem",
            "&:hover": {
              color: "whitesmoke",
              transform: "scale(1.07)",
              transition: "1s",
            },
          }}
        >
          {page}
        </Link>
      ))}
    </Box>
  );
}
