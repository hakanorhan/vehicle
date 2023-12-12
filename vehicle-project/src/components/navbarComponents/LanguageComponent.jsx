import React from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Langauge icon
import LanguageIcon from '@mui/icons-material/Language';

export default function LanguageComponent() {

    // Set to cookies
    const handleLanguageButton = () => {

    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (language) => {
      setAnchorEl(null);

      // Set cookie
      document.cookie = language
    };

  return (
    <Box sx={{mr:3, padding:0}}>
           
           <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
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
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {handleClose('de')}}>Deutsch</MenuItem>
        <MenuItem onClick={() => {handleClose('en')}}>English</MenuItem>
      </Menu>
            </Box>
  )
}
