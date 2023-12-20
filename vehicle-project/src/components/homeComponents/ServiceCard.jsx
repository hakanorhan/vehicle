import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import PropTypes from 'prop-types';

import { Box, Button, Paper, Typography, ThemeProvider } from '@mui/material'

import { themeServiceCard } from '../../themes/ThemeHome';


ServiceCard.propTypes = {
    imgSource: PropTypes.string,
    paperWidthSm: PropTypes.number
    }

export default function ServiceCard(props) {
  return (
    <Grid2 xs={12} sm={props.paperWidthSm}>
      <ThemeProvider theme={themeServiceCard}>
        <Paper elevation={4}>
        <Box sx={{width:'100%', height:'110px'}}>
        <img src={`${props.imgSource}.png`} alt='Bild'/>
        </Box>
        <Typography sx={{padding:'0.5rem'}} variant='h6' component='h1'>Service</Typography>
        <Typography sx={{padding:'0.5rem'}} variant='body2' component='p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </Typography>
        <Button sx={{margin:'1rem', backgroundColor:'black'}} variant="contained">
        Suchen
      </Button>
      </Paper>
      </ThemeProvider>
    </Grid2>
  )
}
