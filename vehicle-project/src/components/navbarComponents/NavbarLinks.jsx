import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

import { languages } from '../../static-data/data';

export default function NavbarLinks() {
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
  
    return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {
                languages.germanLanguage.navbarLinks.map((page) => (
                    <Button 
                        key={page}
                        onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'whitesmoke', display:'block'}}
                    >
                        { page }
                    </Button>
                ))
            }
            </Box>
  )
}
