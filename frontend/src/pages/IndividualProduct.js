import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import { Grid, Box, Paper, Link, IconButton, Button, TextField, Avatar, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Header from '../shared/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));

const baseUrl = 'http://localhost:8989/api/v1';
const productData = {

}
const Product = () => {

    const [state, setState] = React.useState(productData);
    const params = useParams();

    useEffect(() => {
        axios.get(`${baseUrl}/item/${params.itemName}`).then((response) => {
            setState(response.data)
        }).catch(error => {
            if (!error.response) {
                // network error
                console.log('Error: Network Error');
            } else {
                console.log(error.response);
            }
        })
    }, [])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid item xs={4} >
                    <Grid item align='right'>
                        <ShareIcon style={{ marginRight: '10px', marginTop: '10px', align: 'right' }} />
                    </Grid>
                    <img style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={state.itemImage}
                    />
                </Grid>
                <Grid item xs={8} >
                    <Grid container>
                        <Item style={{ backgroundColor: '#cebcbc', align: 'left' }}>
                            <Typography style={{ marginTop: '0px', fontSize: '30px', color: 'black' }}>
                                {state.itemName}
                            </Typography>
                            <Typography style={{ marginTop: '3px', fontSize: '17px', color: 'black' }}>
                                (1Box-200gm)
                            </Typography>
                            <Grid container spacing={2} style={{ marginTop: '10px', color: 'black', marginLeft: '3px' }}>
                                <StarIcon style={{ fontSize: 'large' }} /><StarIcon style={{ fontSize: 'large' }} /><StarIcon style={{ fontSize: 'large' }} /><StarIcon style={{ fontSize: 'large' }} /><StarBorderIcon style={{ fontSize: 'large' }} />
                                <Typography style={{ marginTop: '0px', marginLeft: '8px', fontSize: '15px', color: 'black' }}>
                                    4/5
                                </Typography>
                                <TrendingUpTwoToneIcon style={{ marginLeft: '40px', color: '#746969' }} />
                                <Link href="#" color="inherit" style={{ marginLeft: '7px', marginBottom: '8px', marginTop: '0px' }}>
                                    {'600 ratings and 50 reviews'}
                                </Link>
                                <Link href="#" color="inherit" style={{ marginLeft: '12px', marginBottom: '8px', marginTop: '0px' }}>
                                    {'Q&As'}
                                </Link>
                                <QuestionMarkTwoToneIcon style={{ fontSize: '15px', color: '#746969' }} />
                            </Grid>
                            <Typography style={{ marginTop: '5px', marginLeft: '8px', fontSize: '15px', color: '#015c01', fontWeight: 'bold' }}>
                                Rs.{state.itemPrice}
                            </Typography>
                            <Grid container spacing={2} style={{ marginTop: '10px', color: 'black', marginLeft: '3px' }}>
                                <Typography style={{ marginTop: '2px', marginLeft: '6px', fontSize: '15px', color: 'black', fontWeight: 'bold' }}>
                                    Qty:
                                </Typography>
                                <IconButton aria-label="add">
                                    <AddCircleRoundedIcon style={{ marginTop: '-7px', color: 'black' }} />
                                </IconButton>
                                <Box sx={{ width: 60, height: 24, backgroundColor: '#ac8787', alignContent: 'center' }}>
                                    <Typography style={{ marginTop: '2px', marginLeft: '25px', fontSize: '15px', color: 'white', fontWeight: 'bold' }}>
                                        1
                                    </Typography>
                                </Box>
                                <IconButton aria-label="remove">
                                    <RemoveCircleIcon style={{ marginTop: '-7px', color: 'black' }} />
                                </IconButton>
                            </Grid>
                            <Grid container spacing={2}>
                                <LocationOnIcon style={{ marginTop: '32px', marginLeft: '20px', color: 'black', fontSize: 'large' }} />
                                <Typography style={{ marginTop: '30px', marginLeft: '3px', fontSize: '17px', color: 'black' }}>
                                    Delivery Options
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <TextField style={{ marginTop: '25px', marginLeft: '30px' }}
                                    id="filled-search"
                                    label="Enter Pincode"
                                    type="search"
                                    variant="filled"
                                />
                                <Button variant="contained" style={{ maxWidth: '64px', maxHeight: '35px', minWidth: '30px', minHeight: '30px', marginTop: '33px', marginLeft: '10px', backgroundColor: '#3d81b8' }}>
                                    Verify
                                </Button>
                            </Grid>
                            <Grid container spacing={2}>
                                <Box sx={{ width: 350, height: 35, backgroundColor: '#ac8787', alignContent: 'center', marginTop: '60px', marginLeft: '70px', marginBottom: '8px' }}>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: '#026902' }}>Buy now</Button>
                                </Box>
                                <Box sx={{ width: 350, height: 35, backgroundColor: '#ac8787', marginTop: '60px', marginLeft: '30px', marginBottom: '8px' }}>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: '#026902' }}>Add to cart</Button>
                                </Box>
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className='product-desc'>
                <Grid item xs={12}>
                    <Typography style={{ marginTop: '50px', fontSize: '2.1rem', color: 'grey', fontWeight: 'bold' }}>
                        About product
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ p: 2, m: 2 }}>
                    <Typography variant='body1' style={{
                        marginTop: '10px',
                        color: 'grey',
                        textAlign: 'justify'
                    }}>
                        It’s cherry season again! They’re fresh, plentiful, beautiful, and delicious, but, you may be
                        wonderingare cherries actually that good for you? The answer is yes, 100 times yes! Cherries
                        are not only one of the healthiest fruits, they also rank as one of the most health protective
                        foods overall.
                        <br />
                        1. Cherry are full of antioxidants. <br />
                        2. They protect against diabetes. <br />
                        3. They Promote Healthy Sleep <br />
                        4. They can provide arthritis relief <br />
                        5. They lower the risk of gout attacks <br />
                        6. They curb cholesterol <br />
                        7. They reduce post exercise painVariety -Durone Nero Heart-shaped. Firm, fibrous, sweet, not very juicy.
                        Flavour excellent (considered one of the best in the world by connossieurs.)
                    </Typography>
                </Grid>
            </Grid>

            <Grid container>

                <Grid item xs={12}>
                    <Typography style={{ marginTop: '50px', fontSize: '2.1rem', color: 'grey', fontWeight: 'bold' }}>
                        Ratings and reviews
                    </Typography>
                </Grid>

                <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '20px',

                }}>
                    <Grid item xs={12}>
                        <Stack spacing={2}>
                            <Item style={{ backgroundColor: '#f1e7e7' }}>
                                <Grid container spacing={2} sx={{
                                    padding: '20px'
                                }}>
                                    <Grid item xs={2} >
                                        <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            Riddhima Rao <span className='rating'>(4/5)</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>
                                            Good quality, tasted good.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Item>
                            <Item style={{ backgroundColor: '#f1e7e7' }}>
                                <Grid container spacing={2} sx={{
                                    padding: '20px'
                                }}>
                                    <Grid item sx={2} >
                                        <Avatar sx={{ width: 30, height: 30 }}></Avatar>
                                    </Grid>
                                    <Grid item sx={4}>
                                        <Typography style={{ fontWeight: 'bold' }}>
                                            Anjali Tyagi <span className='rating'>(4.5/5)</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={6}>
                                        <Typography >
                                            Farm fresh product. Resonable price!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>

        </Box>

    )

}

export default Product;