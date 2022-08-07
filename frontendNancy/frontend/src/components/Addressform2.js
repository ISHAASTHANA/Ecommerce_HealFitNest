import * as React from 'react';
import {FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function AddressForm() {
  const [address, setAddress] = React.useState('');

  const handleChange = (event) => {
    setAddress(event.target.value);
  };
  const navigate=useNavigate();
  return (
    <React.Fragment>
      <FormControl fullWidth style={{marginTop:'10px'}}>
        <InputLabel>Select Address</InputLabel>
        <Select id="address"
          labelId="address"
          value={address}
          label="Select Address"
          onChange={handleChange}
        >
          <small id='address_error'></small>
          <MenuItem value={10}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</MenuItem>
          <MenuItem value={20}>2553, Mahavir Market, Sadar Bazar,Delhi</MenuItem>
          <MenuItem value={30}>G-33 Mgl House, Bandra Kurla Complex, Bandra (east),Mumbai</MenuItem>
        </Select>
      </FormControl>
      
      <Button variant="text" onClick={() => navigate('/checkout')}>Add new address</Button>
    </React.Fragment>
  );
}