import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import loginValidation from '../utils/loginValidation';


const data = {
  email: '',
  password: ''
}

const Login = () => {

  const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0' }
  const avtstyle = { backgroundColor: 'rgb(15 155 66)' }
  const btstyle = { margin: '10px 0', backgroundColor: '#39c06b' }
  const psstyle = { margin: '15px 0' }

  const navigate = useNavigate();
  const [user, setUser] = React.useState(data);
  
  const handleChanges = (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = () => {
    console.log(user);
    handleChanges("event")
    loginValidation();
    axios.post('http://localhost:8989/api/v2/loginUser', user).then((response) => {
      console.log(response)
      // navigate('/signup')
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
    <Grid container >
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
        <Paper elevation={10} style={paperStyle}>
          <Grid item xs={12} align='center'>
            <Avatar style={avtstyle}><LockIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>

          <TextField
            required
            id="email"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChanges}
            fullWidth
          />
          <TextField
            required id="password"
            label="Password"
            type='password'
            value={user.password}
            style={psstyle}
            name="password"
            onChange={handleChanges}
            fullWidth />
          <Button variant="contained" type='submit' style={btstyle} fullWidth>Log In</Button>
          <Typography>
            <Link href="/forgotPass">Forgot password?</Link>
          </Typography>
          <Typography> Don't have an account?
            <Link onClick={handleSubmit} style={{ cursor: 'pointer' }}>Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
export default Login;