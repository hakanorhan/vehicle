import React from 'react'
import Typography from '@mui/material/Typography';
import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone';

export default function LogoCompanyName(props) {
  return (
    <>
    {/* Logo */}
    <ToysTwoToneIcon sx={{ display: { xs: props.xs, md: props.md }, mr: 1 }} />
    <Typography
              variant= {props.variant}
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: props.xs, md: props.md },
                fontFamily: 'Roboto',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              vehicle
            </Typography>
  </>
  )
}
