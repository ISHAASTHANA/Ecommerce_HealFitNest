import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Button, Alert } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import validate from '../utils/signupValidation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:8989/api';
const data = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  contact: ''
}

const Signup = () => {

  const paperStyle = { padding: 20, width: 320, margin: '0' }
  const avtstyle = { backgroundColor: 'rgb(15 155 66)' }
  const headerStyle = { margin: 0 }
  const tystyle = { margin: '5px auto' }
  const nystyle = { margin: '10px auto' }
  const marginTop = { marginTop: 5 }
  const btstyle = { margin: '10px 0', backgroundColor: 'rgb(15 155 66)' };

  const [user, setUser] = React.useState(data);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = () => {
    validate();
    console.log(user);
    axios.post(`${baseUrl}/v2/registerUser`, user).then((response) => {
      console.log(response);
      if (response.data === "User added successfully") {
        alert('New user added!');
        navigate('/login');
      }
      
    }).catch(error => {
      if (!error.response) {
        // network error
        console.log('Error: Network Error');
      } else {
        console.log(error.response);
      }
    })
    

  }

  return (
    
    <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avtstyle}><AddCircleOutlineIcon /></Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} style={tystyle}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              onChange={handleChange}
              value={user.firstName}
              autoFocus
            />
            <small id='firstname_error'></small>
          </Grid>
          <Grid item xs={12} sm={6} style={tystyle}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              value={user.lastName}
              autoComplete="family-name"
            />
            <small id='lastname_error'></small>
          </Grid>
        </Grid>
        <TextField
          required
          id="email"
          label="Email address"
          name="email"
          fullWidth
          onChange={handleChange}
          value={user.email}
          style={tystyle}
        />
        <small id='email_error'></small>
        <FormControl component="fieldset" style={marginTop}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender" size="small" style={{ display: 'initial' }}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <TextField style={nystyle}
          required
          id="contact"
          label="Phone number"
          name="contact"
          onChange={handleChange}
          value={user.contact}
          fullWidth
        />
        <small id='phonenumber_error'></small>
        <TextField
          required
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={user.password}
          fullWidth
        />
        <small id='password_error'></small>
        <FormGroup>
          <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} id='checkbox' />} label="I accept the terms and conditions" />
          <small id='checkbox_error'></small>
        </FormGroup>
        <Button variant="contained" type='submit' onClick={handleSubmit} style={btstyle} fullWidth>Sign Up</Button>
      </Paper>
    </Grid>
  )
}
export default Signup;