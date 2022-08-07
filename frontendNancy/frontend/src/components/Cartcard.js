import {Grid,Paper,styled, Typography,Box,Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { increaseValue,decreaseValue } from './Button';
import './Button.css';
import './cartcard.css';
import { useState,useEffect } from 'react';
import Header from '../shared/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
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

{/*
  const products=[
    {
        name: 'Cherry',
        quantity: '(1Box-200gm)',
        image:"https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU=",
        price:200,
    },
    {
        name:'Almonds',
        quantity:'(1Box-100gm)',
        image:"https://media.istockphoto.com/photos/almonds-picture-id153711056?b=1&k=20&m=153711056&s=170667a&w=0&h=8exR9-QE1WweR4ijYM7XdlELsrKBYLQyi7ILRexnHg4=",
        price :100
    },
    {
        name:'Onions',
        quantity:'1Kg',
        image:'https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?b=1&k=20&m=175448479&s=170667a&w=0&h=kcjadYpPSifmgaESFhA7EKVMdLmL-pXPhrwSvJM0o2U=',
        price : 200
    }
  ];
  
  const summary=[
    {
        total:500,
        count:3
    }
  ]*/}
  const baseUrl = 'http://localhost:8989/api/v4/cart/12345';
  
export default function Cartcard(){
    const [count,setCount]=useState(0);
    const[products,setProducts]=useState({});
    const navigate=useNavigate();
    useEffect(() => {
        axios.get(`${baseUrl}`).then((response) => {
            setProducts(response.data)
            console.log(products)
        }).catch(error => {
                    if (!error.response) {
                        // network error
                        console.log('Error: Network Error');
                    } else {
                        console.log(error.response);
                    }
                })
    
    }, []);

    return( 
       <Grid>
            <Header/>
            <Grid container columnSpacing={2}>
                    <Grid item xs={8}>
                    <Typography style={{fontSize:'30px',marginTop:'30px',marginLeft:'10px'}}>
                            Your Organic Basket
                        </Typography>
                    </Grid>  

                   <Grid container spacing={2}>
                        <Grid item xs={8.5}>
                        {products.cartItems.map((product) => (
                        <Grid item xs={12}>
                            <Item style={{backgroundColor:'rgb(196, 228, 181)'}} className='gridmargin'>
                            <Grid container spacing={2}>
                                <Box component="img" sx={{height: 120,width: 120,maxHeight: { xs: 233, md: 167 },maxWidth: { xs: 350, md: 250 },marginTop: '15px',marginLeft: '20px', borderRadius: 2}}
                                    alt="Cherry"
                                    src={product.image}
                                />
                                <Grid item xs={2}>
                                    <Typography style={{fontSize:'30px',marginTop:'30px',color:'rgb(60, 22, 66)'}}>
                                        {product.itemName}
                                    </Typography>
                                    {/*<Typography style={{fontSize:'15px',marginTop:'0px',color:'rgb(60, 22, 66)'}}>
                                        setCount({product.itemQuantity})
                        </Typography>*/}
                                </Grid>
                                <Grid item xs={3}>
                                <form>
                                        <div class="value-button" id="decrease"  onClick={()=>setCount(count-1)} value="Decrease Value"><RemoveIcon/></div>
                                        <input type="number" id="number" value={count} />
                                        <div class="value-button" id="increase" onClick={()=>setCount(count+1)} value="Increase Value"><AddIcon/></div>
                                </form>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography style={{fontSize:'25px',marginTop:'50px',color:'brown',fontWeight:'bold', color:'rgb(63, 132, 229)'}}>
                                        Rs.{product.itemPrice}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant="contained" style={{maxWidth:'45px',maxHeight:'37px',minWidth:'45px',minHeight:'37px',marginTop:'48px',backgroundColor:'rgb(15 109 163)'}}>
                                        <DeleteIcon/>
                                    </Button>
                                </Grid>
                                </Grid>
                            </Item>  
                        </Grid>
                    
                    ))} 
                </Grid>
                <Grid item xs={3.2} className="summary">
                        <Item style={{backgroundColor:'rgb(229, 220, 241)'}} >
                            <Typography style={{fontSize:'30px',marginLeft:'15px',color:'black'}}>
                                Summary
                            </Typography>
                        
                                <Grid>
                                    <Box sx={{ ...commonStyles, borderTop: 1,borderBottom:1,height:'60px',width:'320px',marginLeft:'30px'}} id="box">
                                <Grid container spacing={2}>
                                    <Typography style={{fontSize:'15px',marginLeft:'20px',color:'grey',marginTop:'30px'}}>
                                        Items Price ({products.countItem} items)
                                    </Typography>
                                    <Typography style={{fontSize:'15px',marginLeft:'105px',color:'grey',marginTop:'30px'}}>
                                        Rs.{products.totalPrice}
                                    </Typography>
                                </Grid>
                        </Box>
                        <Grid container >
                            <Grid Item xs={6}>
                                <Typography style={{fontSize:'25px',color:'black',fontWeight:'bold'}}>
                                    Total Price
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <Typography style={{fontSize:'25px',marginLeft:'80px',color:'black',fontWeight:'bold',}}>
                                    Rs.{products.totalPrice}
                                </Typography>
                            </Grid>
                        </Grid>
                        
                        <Button variant="contained" onClick={() => navigate('/checkout2')} style={{backgroundColor:'#2e5d2e',marginTop:'10px'}} fullWidth>Proceed to buy</Button>
                                </Grid>
                                
                       
                                
                                 
                        </Item>
                    </Grid> 
            </Grid>   
                

            </Grid>
        </Grid>
        )
                 
 
}