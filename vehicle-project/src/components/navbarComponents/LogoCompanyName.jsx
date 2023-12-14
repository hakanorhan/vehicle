import React from 'react'

import Typography from '@mui/material/Typography';
//import ToysTwoToneIcon from '@mui/icons-material/ToysTwoTone';

import PropTypes from 'prop-types';

LogoCompanyName.propTypes = {
  variant: PropTypes.string,
  xs: PropTypes.string,
  md: PropTypes.string
}

export default function LogoCompanyName(props) {

  return (
    <>
    {/* Logo */}
    {/* <ToysTwoToneIcon sx={{ display: { xs: props.xs, md: props.md }, mr: 1 }} /> */}
    <Typography
              variant= {props.variant}
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: props.xs, md: props.md },
                fontFamily: 'monospace',
                fontWeight: 100,
                fontSize:'1.5rem',
                color: 'silver',
                textDecoration: 'none',
                "&:hover":{transform:'scale(1.15)', transition:'1s'}
              }}
            >
              vehicles
            </Typography>
  </>
  )
}
