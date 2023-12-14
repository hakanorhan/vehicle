import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { GetI18 } from "../../functions/GetI18";

export default function NavbarLinks() {
  const [t, i18n] = GetI18();
  const header = t("header", { returnObjects: true });

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {header.navbarLinks.map((page) => (
        <Button
          key={page}
          sx={{
            my: 2,
            color: "whitesmoke",
            display: "block",
            "&:hover": {
              color: "whitesmoke",
              transform: "scale(1.07)",
              transition: "1s",
            },
          }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}
