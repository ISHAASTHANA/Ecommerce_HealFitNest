import React from 'react'
import {Grid,Paper,Avatar, Typography,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,FormGroup,Checkbox,Button} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const Signup=()=>{
    const paperStyle={padding:20,height :'70vh',width :300,margin:'0'}
    const avtstyle={backgroundColor:'rgb(15 155 66)'}
    const headerStyle={margin:0}
    const tystyle={margin:'10px auto'}
    const nystyle={margin:'5px auto'}
    const marginTop={marginTop: 5 }
    const btstyle={margin:'10px 0',backgroundColor:'rgb(15 155 66)'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avtstyle}><AddCircleOutlineIcon/></Avatar>
             <h2 style={headerStyle}>Sign Up</h2>
            </Grid> 
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} style={tystyle}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6} style={tystyle}>
                <TextField 
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <TextField
             required
             id="outlined-required"
             label="Email address"
             fullWidth
            />
            <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" size="small" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio/>} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
            </FormControl>
            <TextField style={nystyle}
             required
             id="outlined-required"
             label="Phone number"
             fullWidth
            />
            <TextField style={nystyle}
             required
             id="outlined-required"
             label="Password"
             type="password"
             fullWidth
            />
            <FormGroup>
            <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}/>} label="I accept the terms and conditions" />
            </FormGroup>
            <Button variant="contained" type='submit' style={btstyle} fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    )
}
export default Signup;