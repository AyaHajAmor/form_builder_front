import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Text(props) {
  return (
      <TextField 
      id="standard-basic" 
      label= {props.placeholder} 
      fullWidth
       />
  );
}