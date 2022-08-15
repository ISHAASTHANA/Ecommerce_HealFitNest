import React, { useContext, useEffect, useState } from 'react'
import { Grid, Button, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { useParams } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { UserContext } from '../App';
import CartContext from '../contexts/CartContext';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const baseUrl = 'http://localhost:8989/api';

const IndividualProduct = () => {

    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);
    const [itemAvailable, setItemAvailable] = useState('')
    const { itemName } = useParams();
    let { userId, setUserId } = useContext(UserContext);
    let { cartId, setCartId } = useContext(CartContext);


    const handleIncrement = () => {
        setCount(count + 1);
        console.log(count);
    }
    const handleDecrement = () => {
        if (count <= 1) {
            setCount(1)
        } else {
            setCount(count - 1);
        }
        console.log(count);
    }

    useEffect(() => {
        axios.get(`${baseUrl}/v1/item/${itemName}`).then((res) => {
            setProduct(res.data)
            if (product.itemAvailable == true) {
                setItemAvailable('Available')
            } else {
                setItemAvailable('Sold Out')
            }
        }).catch(error => {
            if (!error.response) {
                console.log('Error: Network Error');
            } else {
                console.log(error.response);
            }
        })
    }, [itemName])

    const addToCart = () => {
        console.log("User id: ", userId);
        if (cartId === '') {
            axios.post(`${baseUrl}/v4/addToCart/${userId}/${product.itemId}/${count}`).then((res) => {
                setCartId(res.data);
                console.log(res);
                console.log("CartId:", cartId);
            }).catch(error => {
                if (!error.response) {
                    console.log('Error: Network Error');
                } else {
                    console.log(error.response);
                }
            })
        } else {
            axios.put(`${baseUrl}/v4/updateCart/${cartId}/${product.itemId}/${count}`).then((res) => {
                console.log('Update cart response: ', res);
                console.log("CartId:", cartId);
            }).catch(error => {
                if (!error.response) {
                    console.log('Error: Network Error');
                } else {
                    console.log(error.response);
                }
            })
        }
    }

    return (
        <>
            <Header />
            <Grid container sx={{ flexGrow: 1 }}>
                <Grid item xs={4.8} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '100%', objectFit: 'contain' }}
                        src={product.itemImage} alt={product.itemName}
                    />
                </Grid>
                <Grid item xs={6.8} className='product-meta' sx={{ padding: '3%', m: 1 }}>
                    <Grid container >
                        <Grid item xs={12} className='product-meta-header' sx={{ textAlign: 'left' }}>
                            <Chip label={itemAvailable} />
                            <Typography variant='h2'>
                                {product.itemName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container sx={{ textAlign: 'left', py: 2, m: 1 }}>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>Price</Typography>
                                    <Typography variant='h3'>
                                        <span><CurrencyRupeeIcon fontSize='large' /></span>
                                        {product.itemPrice}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant='h6'>Quantity</Typography>
                                    <div style={{ display: 'flex', color: 'white' }}>
                                        <div className="value-button" style={{
                                            backgroundColor: '#228B22',
                                            borderTopLeftRadius: '12px',
                                            borderBottomLeftRadius: '12px'
                                        }} id="decrease"
                                            onClick={handleDecrement} value="Decrease Value"><RemoveIcon /></div>
                                        <input type="number" id='number' value={count} readOnly />
                                        <div className="value-button" style={{
                                            backgroundColor: '#228B22',
                                            borderTopRightRadius: '12px',
                                            borderBottomRightRadius: '12px'
                                        }} id="increase"
                                            onClick={handleIncrement} value="Increase Value"><AddIcon /></div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{ py: 2, m: 1 }}>
                            <Typography variant='h6'>Description</Typography>
                            <Typography variant='body1'>{product.itemDescription}</Typography>
                        </Grid>
                        <Button variant="contained" size='medium' color='success' endIcon={<AddShoppingCartRoundedIcon />} onClick={addToCart} fullWidth sx={{ borderRadius: '1rem' }}>
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Footer />
        </>

    )

}

export default IndividualProduct;