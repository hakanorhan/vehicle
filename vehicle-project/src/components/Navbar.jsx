import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import ResponsiveNavbarLinks from './navbarComponents/ResponsiveNavbarLinks';
import LogoCompanyName from './navbarComponents/LogoCompanyName';
import NavbarLinks from './navbarComponents/NavbarLinks';
import LanguageComponent from './navbarComponents/LanguageComponent';
import AccountComponent from './navbarComponents/AccountComponent';

export default function Navbar() {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            {/* Company name Desktop size */}
            <LogoCompanyName variant="h6" xs='none' md='flex'/>

            {/* Navbar links  Hamburger Menu Moile and Table size*/}
            <ResponsiveNavbarLinks />

            {/* Company name Smartphone and Tablet size */}
            <LogoCompanyName variant="h5" xs='flex' md='none' />
            
            {/* Navbar Links Desktop size */}
            <NavbarLinks />
            
            <LanguageComponent />

            <AccountComponent />
          </Toolbar>
        </Container>
      </AppBar>)
}