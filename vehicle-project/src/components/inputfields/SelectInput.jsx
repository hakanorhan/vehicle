import React from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import PropTypes from 'prop-types';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

SelectInput.propTypes = {
label: PropTypes.string,
helperText: PropTypes.string,
textfieldWidth: PropTypes.number
}

const currencies = [
    {
      value: 'USD',
      label: 'Alle Modelle',
    },
    {
      value: 'EUR',
      label: 'Alle Modelle',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

export default function SelectInput(props) {
     return (
     <Grid2 xs={props.textfieldWidth}>
       <TextField
         id="outlined-select-currency"
         select
         label={props.label}
         defaultValue="EUR"
         noValidate
         autoComplete='off'
         component='form'
         sx={{width:'100%'}}
       >
         {currencies.map((option) => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
       </TextField>
       </Grid2>
     )
}