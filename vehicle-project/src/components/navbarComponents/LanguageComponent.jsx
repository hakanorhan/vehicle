import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import i18next from "i18next";

// Langauge icon
import LanguageIcon from "@mui/icons-material/Language";

// Supported Languages
import { supportedLanguages } from "../../I18Initializer";

export default function LanguageComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  /* Open menu */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /* Close menu */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /* Change to selected language */
  const changeLanguage = (language) => {
    i18next.changeLanguage(language, (err) => {
      if (err) return console.log("No supported language", err);
    });
  };
  
  return (
    <Box sx={{ mr: 3, padding: 0 }}>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        { /* Language Menu Item */ }
        {supportedLanguages.map((language) => {
          return (
            <MenuItem
              key={language.shortName}
              onClick={() => {
                handleClose();
                changeLanguage(language.shortName);
              }}
            >
              {language.fullName}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}
