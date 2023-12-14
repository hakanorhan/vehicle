import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GetI18 } from "../../functions/GetI18";

export default function ResponsiveNavbarLinks() {
  const [t, i18n] = GetI18();
  const header = t("header", { returnObjects: true });

  /* Open and close menu */
  const [navMenu, setNavMenu] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setNavMenu(event.currentTarget);
  };

  /* Close nav menu */
  const handleCloseNavMenu = () => {
    setNavMenu(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={navMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(navMenu)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {header.navbarLinks.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}