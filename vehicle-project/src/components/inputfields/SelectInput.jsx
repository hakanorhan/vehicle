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

import { GetI18 } from '../../functions/GetI18';

export default function SelectInput(props) {
     
  const [t, i18n] = GetI18();
  const search = t("search", { returnObjects: true });

  const carInformations = [
    
    {
      value: 'all',
      label: 'Alle Modelle',
    },
    {
      value: 'audi',
      label: 'Audi',
    },
    {
      value: 'bmw',
      label: 'BMW',
    },
  ];

  
  return (
     <Grid2 xs={props.textfieldWidth}>
       <TextField
         id="outlined-select-currency"
         select
         label={props.label}
         defaultValue="all"
         noValidate
         autoComplete='off'
         component='form'
         sx={{width:'100%'}}
       >
         {carInformations.map((option) => (
           <MenuItem key={option.value} value={option.value}>
             {option.label}
           </MenuItem>
         ))}
         
       </TextField>
       </Grid2>
     )
}