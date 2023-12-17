import React from 'react'
import { Box, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <Box sx={{margin:'0.5rem', marginTop:'2rem'}}>
      <Typography textAlign='center' variant='h5' component='h1'>
        Unser Service
      </Typography>
      <Grid2 container textAlign='center'  xs={12}>
        <ServiceCard paperWidthSm={6} imgSource= "/services/repair" />
        <ServiceCard paperWidthSm={6} imgSource= "/services/customer-support" />
        <ServiceCard paperWidthSm={6} imgSource= "/services/oil" />
        <ServiceCard paperWidthSm={6} imgSource= "/services/battery" />
        <ServiceCard paperWidthSm={12} imgSource= "/services/insurance" />
      </Grid2>
    </Box>
  )
}
