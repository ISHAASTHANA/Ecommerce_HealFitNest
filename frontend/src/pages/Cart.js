import React from 'react'
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Grid, Box, Paper, Button, Modal, Radio, FormControlLabel } from '@mui/material';
import onion from '../assets/onion.jpeg';
import mint from '../assets/mint.jpg';
import Typography from '@mui/material/Typography';
import Header from '../shared/Header';
import Footer from '../shared/Footer';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
}));
const commonStyles = {
    m: 1,
    borderColor: 'text.primary',
    width: '5rem',
    height: '5rem',
};
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'rgb(201, 218, 234)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const bestSellers = [
    { name: 'Onion', image: `${onion}`, cost: 'Rs. 40.0', quantity: '1 kg' },
    { name: 'Mint Leaves', image: `${mint}`, cost: 'Rs. 70.0', quantity: '1 bunch' }
]

const Cart = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Grid>
            <Header />
            <Typography style={{ marginLeft: '50px', fontSize: '30px', marginTop: '30px' }}>
                Your Organic Basket
            </Typography>
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8} style={{ marginTop: '30px', marginLeft: '60px' }}>
                    <Item style={{ backgroundColor: 'rgb(196, 228, 181)' }}>
                        <Grid container spacing={2}>
                            <Box
                                component="img"
                                sx={{
                                    height: 120,
                                    width: 120,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                    marginTop: '15px',
                                    marginLeft: '20px', borderRadius: 2
                                }}
                                alt="Cherry"
                                src="https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU="
                            />
                            <Grid>
                                <Typography style={{ fontSize: '30px', marginLeft: '15px', marginTop: '30px', color: 'rgb(60, 22, 66)' }}>
                                    Cherry
                                </Typography>
                                <Typography style={{ fontSize: '15px', marginLeft: '15px', marginTop: '0px', color: 'rgb(60, 22, 66)' }}>
                                    (1Box-200gm)
                                </Typography>
                            </Grid>
                            <Button variant="contained" style={{ maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: '48px', marginLeft: '100px', backgroundColor: '#29755e' }}>
                                <RemoveIcon />
                            </Button>
                            <Button variant="outlined" style={{ maxWidth: '60px', maxHeight: '37px', minWidth: '60px', minHeight: '37px', marginTop: '48px', marginLeft: '10px' }}>1</Button>
                            <Button variant="contained" style={{ maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: '48px', marginLeft: '10px', backgroundColor: '#29755e' }}>
                                <AddIcon />
                            </Button>
                            <Typography style={{ fontSize: '25px', marginLeft: '150px', marginTop: '50px', color: 'brown', fontWeight: 'bold', color: 'rgb(63, 132, 229)' }}>
                                Rs.200
                            </Typography>
                            <Button variant="contained" style={{ maxWidth: '45px', maxHeight: '37px', minWidth: '45px', minHeight: '37px', marginTop: '48px', marginLeft: '160px', backgroundColor: '#c22828' }}>
                                <FavoriteIcon />
                            </Button>
                            <Button variant="contained" style={{ maxWidth: '45px', maxHeight: '37px', minWidth: '45px', minHeight: '37px', marginTop: '48px', marginLeft: '20px', backgroundColor: 'rgb(15 109 163)' }}>
                                <DeleteIcon />
                            </Button>
                        </Grid>
                    </Item>
                </Grid>
                <Grid item xs={3} style={{ marginTop: '30px' }}>
                    <Item style={{ backgroundColor: 'rgb(229, 220, 241)' }}>
                        <Typography style={{ fontSize: '30px', marginLeft: '15px', color: 'black' }}>
                            Summary
                        </Typography>
                        <Box sx={{ ...commonStyles, borderTop: 1, borderBottom: 1, height: '130px', width: '300px', marginLeft: '25px', marginTop: '20px' }} >
                            <Grid container spacing={2}>
                                <Typography style={{ fontSize: '15px', marginLeft: '20px', color: 'grey', marginTop: '30px' }}>
                                    Items Price (3 items)
                                </Typography>
                                <Typography style={{ fontSize: '15px', marginLeft: '105px', color: 'grey', marginTop: '30px' }}>
                                    Rs.800
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Typography style={{ fontSize: '15px', marginLeft: '20px', color: 'grey', marginTop: '30px' }}>
                                    Discount
                                </Typography>
                                <Typography style={{ fontSize: '15px', marginLeft: '186px', color: 'grey', marginTop: '30px' }}>
                                    Rs.50
                                </Typography>
                            </Grid>
                            <Grid container spacing={2}>
                                <Typography style={{ fontSize: '15px', marginLeft: '20px', color: 'grey', marginTop: '30px' }}>
                                    Shipping charges
                                </Typography>
                                <Typography style={{ fontSize: '15px', marginLeft: '126px', color: 'grey', marginTop: '30px' }}>
                                    Rs.300
                                </Typography>
                            </Grid>
                        </Box>
                        <Grid container spacing={2}>
                            <Typography style={{ fontSize: '25px', marginLeft: '42px', color: 'black', fontWeight: 'bold', marginTop: '20px' }}>
                                Total Price
                            </Typography>
                            <Typography style={{ fontSize: '25px', marginLeft: '80px', color: 'black', fontWeight: 'bold', marginTop: '20px' }}>
                                Rs.1050
                            </Typography>
                        </Grid>
                        <Button variant="contained" onClick={handleOpen} style={{ backgroundColor: '#2e5d2e', marginTop: '10px' }} fullWidth>Proceed to buy</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="Cash on delivery"
                            aria-describedby="Cash on delivery"
                        >
                            <Box sx={style}>
                                <FormControlLabel value="Cash on Delivery" control={<Radio />} label="Cash on Delivery" />
                                <Box sx={{ ...commonStyles, borderTop: 1, borderBottom: 1, height: '100px', width: '300px', marginLeft: '25px', marginTop: '5px' }} >
                                    <Typography style={{ marginLeft: '10px', color: 'grey' }}>
                                        Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                                    </Typography>
                                    <Button variant="contained" style={{ maxWidth: '200px', maxHeight: '30px', minWidth: '170px', minHeight: '30px', marginTop: '10px', marginLeft: '130px', backgroundColor: 'rgb(62 114 62)' }}>
                                        Change address
                                    </Button>
                                </Box>
                                <Button variant="contained" style={{ maxWidth: '300px', maxHeight: '30px', minWidth: '300px', minHeight: '30px', marginTop: '10px', marginLeft: '30px', marginRight: '0px', backgroundColor: 'rgb(62 114 62)' }}>
                                    Place your order
                                </Button>

                            </Box>
                        </Modal>
                    </Item>
                </Grid>
            </Grid>
            {/* second item */}
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8} style={{ marginTop: ' -155px', marginLeft: '60px' }}>
                    <Item style={{ backgroundColor: 'rgb(196, 228, 181)' }}>
                        <Grid container spacing={2}>
                            <Box
                                component="img"
                                sx={{
                                    height: 120,
                                    width: 120,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                    marginTop: '15px',
                                    marginLeft: '20px', borderRadius: 2
                                }}
                                alt="Almonds"
                                src="https://media.istockphoto.com/photos/almonds-picture-id153711056?b=1&k=20&m=153711056&s=170667a&w=0&h=8exR9-QE1WweR4ijYM7XdlELsrKBYLQyi7ILRexnHg4="
                            />
                            <Grid>
                                <Typography style={{ fontSize: '30px', marginLeft: '15px', marginTop: '30px', color: 'rgb(60, 22, 66)' }}>
                                    Almonds
                                </Typography>
                                <Typography style={{ fontSize: '15px', marginLeft: '15px', marginTop: '0px', color: 'rgb(60, 22, 66)' }}>
                                    (1Box-500gm)
                                </Typography>
                            </Grid>
                            <Button variant="contained" style={{ maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: '48px', marginLeft: '80px', backgroundColor: '#29755e' }}>
                                <RemoveIcon />
                            </Button>
                            <Button variant="outlined" style={{ maxWidth: '60px', maxHeight: '37px', minWidth: '60px', minHeight: '37px', marginTop: '48px', marginLeft: '10px' }}>1</Button>
                            <Button variant="contained" style={{ maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: '48px', marginLeft: '10px', backgroundColor: '#29755e' }}>
                                <AddIcon />
                            </Button>
                            <Typography style={{ fontSize: '25px', marginLeft: '150px', marginTop: '50px', fontWeight: 'bold', color: 'rgb(63, 132, 229)' }}>
                                Rs.100
                            </Typography>
                            <Button variant="contained" style={{ maxWidth: '45px', maxHeight: '37px', minWidth: '45px', minHeight: '37px', marginTop: '48px', marginLeft: '155px', backgroundColor: '#c22828' }}>
                                <FavoriteIcon />
                            </Button>
                            <Button variant="contained" style={{ maxWidth: '45px', maxHeight: '37px', minWidth: '45px', minHeight: '37px', marginTop: '48px', marginLeft: '20px', backgroundColor: 'rgb(15 109 163)' }}>
                                <DeleteIcon />
                            </Button>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
            {/*third item*/}
            <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={8} style={{ marginTop: '20px', marginLeft: '60px', marginBottom: '50px' }}>
                    <Item style={{ backgroundColor: 'rgb(196, 228, 181)' }}>
                        <Grid container spacing={2}>
                            <Box
                                component="img"
                                sx={{
                                    height: 120,
                                    width: 120,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                    marginTop: '15px',
                                    marginLeft: '20px', borderRadius: 2
                                }}
                                alt="Cherry"
                                src="https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?b=1&k=20&m=175448479&s=170667a&w=0&h=kcjadYpPSifmgaESFhA7EKVMdLmL-pXPhrwSvJM0o2U="
                            />
                            <Grid>
                                <Typography style={{ fontSize: '30px', marginLeft: '15px', marginTop: '30px', color: 'rgb(60, 22, 66)' }}>
                                    Onions
                                </Typography>
                                <Typography style={{ fontSize: '15px', marginLeft: '15px', marginTop: '0px', color: 'rgb(60, 22, 66)' }}>
                                    1Kg
                                </Typography>
                            </Grid>
                            <Button variant="contained" style={{ maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: '48px', marginLeft: '100px', backgroundColor: '#29755e' }}>
                                <RemoveIcon />
                            </Button>
                            <Button variant="outlined" style={{ maxWidth: '60px', maxHeight: '37px', minWidth: '60px', minHeight: '37px', marginTop: '48px', marginLeft: '10px' }}>1</Button>
                            <Button variant="contained" style={{ maxWidth: '35px', maxHeight: '35px', minWidth: '35px', minHeight: '35px', marginTop: '48px', marginLeft: '10px', backgroundColor: '#29755e' }}>
                                <AddIcon />
                            </Button>
                            <Typography style={{ fontSize: '25px', marginLeft: '150px', marginTop: '50px', color: 'brown', fontWeight: 'bold', color: 'rgb(63, 132, 229)' }}>
                                Rs.500
                            </Typography>
                            <Button variant="contained" style={{ maxWidth: '45px', maxHeight: '37px', minWidth: '45px', minHeight: '37px', marginTop: '48px', marginLeft: '150px', backgroundColor: '#c22828' }}>
                                <FavoriteIcon />
                            </Button>
                            <Button variant="contained" style={{ maxWidth: '45px', maxHeight: '37px', minWidth: '45px', minHeight: '37px', marginTop: '48px', marginLeft: '20px', backgroundColor: 'rgb(15 109 163)' }}>
                                <DeleteIcon />
                            </Button>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
            <Footer />
        </Grid>


    )
}
export default Cart;