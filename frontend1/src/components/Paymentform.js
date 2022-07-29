import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import {FormControlLabel,Radio} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <FormControlLabel value="Cash on Delivery" control={<Radio/>} label="Cash on Delivery" />
    </React.Fragment>
  );
}