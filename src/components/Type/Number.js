import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function Number() {
  
  return (
      <TextField
        label="Placeholder Label .."
        //value="5454"
        type="number"
        name="numberformat"
        fullWidth
      />
  );
}