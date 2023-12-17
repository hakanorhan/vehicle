import React from 'react'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import ResponsiveNavbarLinks from './navbarComponents/ResponsiveNavbarLinks';
import LogoCompanyName from './navbarComponents/LogoCompanyName';
import NavbarLinks from './navbarComponents/NavbarLinks';
import LanguageComponent from './navbarComponents/LanguageComponent';
import AccountComponent from './navbarComponents/AccountComponent';

import { grey } from '@mui/material/colors';
import ResponsiveDrawer from './navbarComponents/ResponsiveDrawer';

export default function Navbar() {
    
    const greyCode = grey[900];

    return (
      <AppBar position='relative' sx={{bgcolor:greyCode}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            
            {/* Company name Desktop size */}
            <LogoCompanyName variant="h6" xs='none' md='flex'/>

            {/* Navbar links  Hamburger Menu Mobile and Table size*/}
            {/* <ResponsiveNavbarLinks /> */}
            <ResponsiveDrawer />

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