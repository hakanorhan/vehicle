import React from "react";
import { useState } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { GetI18 } from "../../functions/GetI18";

export default function ResponsiveDrawer() {
  const [t, i18n] = GetI18();
  const header = t("header", { returnObjects: true });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    isDrawerOpen ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => handleDrawer()}
      >
        {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <Drawer
        PaperProps={{ sx: { width: {xs: '100%', sm: '85%'} } }}
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box marginTop={7} p={4} textAlign="center" role="presentation">
          {header.navbarLinks.map((page) => (
            <a key={page}>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  lineHeight: { xs: "2rem", sm: "2.3rem" },
                }}
                textAlign="left"
              >
                {page}
              </Typography>
            </a>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
