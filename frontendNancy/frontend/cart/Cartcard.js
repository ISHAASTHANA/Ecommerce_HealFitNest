import { Grid, Paper, styled, Typography, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
//import { increaseValue,decreaseValue } from './Button';
import './Button.css';
import './cartcard.css';
import { useState, useEffect } from 'react';
import Header from '../shared/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { borderLeft } from '@mui/system';
import { withTheme } from '@emotion/react';

import ListItemText from "@mui/material/ListItemText";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const commonStyles = {
    m: 1,
    borderColor: 'text.primary',
    width: '5rem',
    height: '5rem',
};
const tblHead = {
    backgroundColor: 'rgb(60 168 135)',
    fontWeight: '1000',
    color: 'white'
}
  
    
    export default function Cartcard(){
        const navigate=useNavigate();
        const handleDecrement = (prod_name) =>{
            setProducts(products => 
                products.map((product) =>
                 prod_name===product.name ? {...product,quantity:product.quantity-(product.quantity > 1 ? 1 :0)}:product
                )
            );
          }
          const handleIncrement = (prod_name) => {
            setProducts(products => 
                products.map((product) =>
                 prod_name===product.name ? {...product,quantity:product.quantity+1}:product
                )
            );
          }
        const [products, setProducts] = useState([
        
            {
                name: 'Cherry',
                quantity: 1,
                image: "https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU=",
                price: 200,
            },
            {
                name: 'Almonds',
                quantity: 1,
                image: "https://media.istockphoto.com/photos/almonds-picture-id153711056?b=1&k=20&m=153711056&s=170667a&w=0&h=8exR9-QE1WweR4ijYM7XdlELsrKBYLQyi7ILRexnHg4=",
                price: 100
            },
            {
                name: 'Onions',
                quantity: 1,
                image: 'https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?b=1&k=20&m=175448479&s=170667a&w=0&h=kcjadYpPSifmgaESFhA7EKVMdLmL-pXPhrwSvJM0o2U=',
                price: 200
            }
        ]);
    return (
        <Grid>
            <Header />
            <Grid container columnSpacing={2}>
                <Grid item xs={8}>
                    <Typography style={{ fontSize: '30px', marginTop: '30px', marginLeft: '10px' }}>
                        Your Organic Basket
                    </Typography>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={8.5}>
                        <TableContainer component={Paper} style={{ marginLeft: '30px', width: 1050, marginTop: '10px' }}>
                            <Table id='mainTbl' sx={{ minWidth: 1050, maxWidth: 1050 }} aria-label="simple table">
                                <TableHead>
                                    {/* <TableRow sx={{backgroundColor:'rgb(60 168 135)',color:"white",fontWeight:"800"}}> */}
                                    <TableRow sx={{ ...tblHead }}>
                                        <TableCell sx={{ ...tblHead }} align="center">Item</TableCell>
                                        <TableCell sx={{ ...tblHead }} align="center">Quantity</TableCell>
                                        <TableCell sx={{ ...tblHead }} align="center">Price each</TableCell>
                                        <TableCell sx={{ ...tblHead }} align="center">Total price</TableCell>
                                        <TableCell sx={{ ...tblHead }} align="center"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product) => {
                                        
                                        return (
                                            <TableRow
                                                key={product.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell width={280}>
                                                    <Grid container spacing={1}>
                                                        <Box component="img" sx={{ height: 70, width: 70, maxHeight: { xs: 233, md: 167 }, maxWidth: { xs: 350, md: 250 }, marginTop: '15px', marginLeft: '40px', borderRadius: 2 }}
                                                            alt={product.name}
                                                            src={product.image}
                                                        />
                                                        <Grid item xs={2}>
                                                            <Typography style={{ fontSize: '25px', marginTop: '15px', color: 'black' }}>
                                                                {product.name}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>
                                                <TableCell align="left" size="small" width={10}>

                                                    <form>
                                                        <div class="value-button" id="decrease" onClick={() => handleDecrement(product.name)} value="Decrease Value"><RemoveIcon /></div>
                                                        <input type="number" id='number' value={product.quantity} />
                                                        <div class="value-button" id="increase" onClick={() => handleIncrement(product.name)} value="Increase Value"><AddIcon /></div>
                                                    </form>


                                                </TableCell>
                                                <TableCell align="center">{product.price}</TableCell>
                                                <TableCell align="center">{product.price * product.quantity}</TableCell>
                                                <TableCell align="center">
                                                    <Button variant="contained" style={{ maxWidth: '40px', maxHeight: '35px', minWidth: '40px', minHeight: '35px', backgroundColor: 'rgb(15 109 163)' }}>
                                                        <DeleteIcon />
                                                    </Button>
                                                </TableCell>

                                            </TableRow>
                                        )
                                    }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    
                    <Grid item xs={3.2} className="summary">
                        <Item style={{ backgroundColor: 'rgb(229, 220, 241)' }} >
                            <Typography style={{ fontSize: '30px', marginLeft: '15px', color: 'black' }}>
                                Summary
                            </Typography>
                            <Grid>
                                <Box sx={{ ...commonStyles, borderTop: 1, borderBottom: 1, height: '60px', width: '320px', marginLeft: '30px' }} id="box">
                                    <Grid container spacing={2}>
                                        <Typography style={{ fontSize: '15px', marginLeft: '20px', color: 'grey', marginTop: '30px' }}>
                                            Items Price ({products.count} items)
                                        </Typography>
                                        <Typography style={{ fontSize: '15px', marginLeft: '105px', color: 'grey', marginTop: '30px' }}>
                                            Rs.500
                                             Rs.<span id='sumtotal'></span> 
                                        </Typography>
                                    </Grid>
                                </Box>
                                <Grid container >
                                    <Grid Item xs={6}>
                                        <Typography style={{ fontSize: '25px', color: 'black', fontWeight: 'bold' }}>
                                            Total Price
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography style={{ fontSize: '25px', marginLeft: '80px', color: 'black', fontWeight: 'bold', }}>
                                            Rs.500
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Button variant="contained" onClick={() => navigate('/review')} style={{ backgroundColor: '#2e5d2e', marginTop: '10px' }} fullWidth>Proceed to buy</Button>
                            </Grid>


                        </Item>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>
    )}
    



