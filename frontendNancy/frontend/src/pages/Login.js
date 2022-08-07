import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import {FormGroup, Typography} from '@mui/material';
import {FormControlLabel}from '@mui/material';
import {Checkbox} from '@mui/material';
import {Button,Link} from '@mui/material';
import validate2 from '../components/Validate2';
import axios from 'axios'


const data = {
    email: '',
    password: ''
  }
  

  

const Login=({handleChange})=>{
    const paperStyle={padding:20,height :'75vh',width :300,margin:'0'}
    const avtstyle={backgroundColor:'rgb(15 155 66)'}
    const btstyle={margin:'10px 0',backgroundColor:'#39c06b'}
    const psstyle={margin:'15px auto'}
    const [user, setUser] = React.useState(data);
    const handleChanges = (event) => {
        const { name, value } = event.target
        setUser({
          ...user,
          [name]: value
        })
      }
      const handleSubmit = () => {
        validate2();
        console.log(user);
        axios.post('http://localhost:8989/api/v2/loginUser', user).then((response) => {
          console.log(response)
        }).catch(error => {
          if (!error.response) {
            // network error
            console.log('Error: Network Error');
          } else {
            console.log(error.response);
          }
        })
    
      }
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avtstyle}><LockIcon/></Avatar>
            <h2>Log In</h2>
            </Grid>
            
            <TextField
             required
             id="email"
             label="Email id"
             name="email"
             onChange={handleChanges}
             fullWidth
            />
            <small id="email_error" color='red'></small>
            <TextField
             required id="password" label="Password" type='password' name="password" onChange={handleChanges}style={psstyle} fullWidth/>
             <small id="password_error" color='red'></small>
            <FormGroup>
            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>} label="Remember me" />
            </FormGroup>
            <Button variant="contained" type='submit'onClick={handleSubmit} style={btstyle} fullWidth>Log In</Button>
            <Typography>
                <Link href="#">Forgot password?</Link>
            </Typography>
            <Typography> Don't have an account?
                <Link href="#" onClick={()=>handleChange("event",1)}>Sign Up</Link>
            </Typography>
            
            
            </Paper>
        </Grid>
    )
}
export default Login;