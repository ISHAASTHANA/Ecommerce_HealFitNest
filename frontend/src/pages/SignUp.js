import React from 'react'
import { Grid, Paper, Avatar, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contact: ''
}


const Signup = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 300, margin: '0' }
    const avtstyle = { backgroundColor: 'rgb(15 155 66)' }
    const headerStyle = { margin: 0 }
    const tystyle = { margin: '10px auto' }
    const nystyle = { margin: '5px auto' }
    const marginTop = { marginTop: 5 }
    const btstyle = { margin: '10px 0', backgroundColor: 'rgb(15 155 66)' }

    const [user, setUser] = React.useState(data);
    const [errors, setErrors] = React.useState({});
    const [isSubmit, setIsSubmit] = React.useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validate(user));
        setIsSubmit(true);
    }

    React.useEffect(() => {
        console.log(errors);
        if (Object.keys(errors).length === 0 && isSubmit) {
            console.log(user);
        }
    }, [errors])

    const validate = (values) => {
        const error = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
            error.email = 'Email is required!'
        }
        if (!values.password) {
            error.password = 'Password is required!'
        }
        return error;
    };

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avtstyle}><AddCircleOutlineIcon /></Avatar>
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
                    type='tel'
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
                <Button variant="contained" type='submit' onClick={handleSubmit} style={btstyle} fullWidth>Sign Up</Button>
            </Paper>
        </Grid>
    )
}
export default Signup;