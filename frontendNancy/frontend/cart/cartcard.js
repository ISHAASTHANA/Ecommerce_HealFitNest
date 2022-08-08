import {Grid,Paper,styled, Typography,Box,Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { increaseValue,decreaseValue } from './Button';
import './Button.css';
import './cartcard.css';
import { useState } from 'react';
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
  
  {/*const products=[
    {
        id:1,
        name: 'Cherry',
        quantity: 3,
        image:"https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU=",
        price:200
    },
    {
        id:2,
        name:'Almonds',
        quantity:2,
        image:"https://media.istockphoto.com/photos/almonds-picture-id153711056?b=1&k=20&m=153711056&s=170667a&w=0&h=8exR9-QE1WweR4ijYM7XdlELsrKBYLQyi7ILRexnHg4=",
        price :100
    },
    {
        id:3,
        name:'Onions',
        quantity:1,
        image:'https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?b=1&k=20&m=175448479&s=170667a&w=0&h=kcjadYpPSifmgaESFhA7EKVMdLmL-pXPhrwSvJM0o2U=',
        price : 200
    }
  ];
*/}
  const summary=[
    {
        name:'Items price',
        price:300,
    }
  ]
  
  
export default function Cartcard(){
    const[cart,setCart]=useState([{
        id:1,
        name: 'Cherry',
        quantity: 1,
        image:"https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU=",
        price:200
    },
    {
        id:2,
        name:'Almonds',
        quantity:1,
        image:"https://media.istockphoto.com/photos/almonds-picture-id153711056?b=1&k=20&m=153711056&s=170667a&w=0&h=8exR9-QE1WweR4ijYM7XdlELsrKBYLQyi7ILRexnHg4=",
        price :100
    },
    {
        id:3,
        name:'Onions',
        quantity:1,
        image:'https://media.istockphoto.com/photos/red-onion-slice-picture-id175448479?b=1&k=20&m=175448479&s=170667a&w=0&h=kcjadYpPSifmgaESFhA7EKVMdLmL-pXPhrwSvJM0o2U=',
        price : 200
    }]);
    
      const handleDecrement = (prod_name) =>{
        setCart(cart => 
            cart.map((item) =>
             prod_name===item.name ? {...item,quantity:item.quantity-(item.quantity > 1 ? 1 :0)}:item
            )
        );
      }
      const handleIncrement = (prod_name) => {
        setCart(cart => 
            cart.map((item) =>
             prod_name===item.name ? {...item,quantity:item.quantity+1}:item
            )
        );
      }
    return( 
        <Grid>
            <Grid container columnSpacing={2}>
                    <Grid item xs={8}>
                    <Typography style={{fontSize:'30px'}}>
                            Your Organic Basket
                        </Typography>
                    </Grid>   
                     
                    <Grid container spacing={2}>
                        <Grid item xs={8.5}>
                        {cart.map((item) => (
                        <Grid item xs={12}>
                            <Item style={{backgroundColor:'rgb(196, 228, 181)'}} className='gridmargin'>
                            <Grid container spacing={2}>
                                <Box component="img" sx={{height: 120,width: 120,maxHeight: { xs: 233, md: 167 },maxWidth: { xs: 350, md: 250 },marginTop: '15px',marginLeft: '20px', borderRadius: 2}}
                                    alt="Cherry"
                                    src={item.image}
                                />
                                <Grid item xs={2}>
                                    <Typography style={{fontSize:'30px',marginTop:'30px',color:'rgb(60, 22, 66)'}}>
                                        {item.name}
                                    </Typography>
                                    <Typography style={{fontSize:'15px',marginTop:'0px',color:'rgb(60, 22, 66)'}}>
                                        {item.quantity}
                                    </Typography>
                                </Grid>
                                <Grid item xs={3}>
                                <form >
                                <div class="value-button" id="decrease" onClick={()=>handleDecrement(item.name)} value="Decrease Value"><RemoveIcon/></div>
                                <input type="number" id='number' value={item.quantity} />
                                <div class="value-button" id="increase" onClick={()=>handleIncrement(item.name)} value="Increase Value"><AddIcon/></div>
                                </form>
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography style={{fontSize:'25px',marginTop:'50px',color:'brown',fontWeight:'bold', color:'rgb(63, 132, 229)'}}>
                                        {item.price}
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
                        <Item >
                            <Typography style={{fontSize:'30px',marginLeft:'15px',color:'black'}}>
                                Summary
                            </Typography>
                            <Grid item xs={10}>
                                <Box sx={{ ...commonStyles, borderTop: 1,borderBottom:1,height:'130px',width:'320px',marginLeft:'30px'}} id="box">
                                    <Grid container spacing={2}>
                                        <Typography style={{fontSize:'15px',marginLeft:'20px',color:'grey',marginTop:'30px'}}>
                                            Items Price (3 items)
                                        </Typography>
                                        <Typography style={{fontSize:'15px',marginLeft:'105px',color:'grey',marginTop:'30px'}}>
                                            {summary.price}
                                        </Typography>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Typography style={{fontSize:'15px',marginLeft:'20px',color:'grey',marginTop:'30px'}}>
                                            Discount
                                        </Typography>
                                        <Typography style={{fontSize:'15px',marginLeft:'186px',color:'grey',marginTop:'30px'}}>
                                            Rs.50
                                        </Typography>
                                    </Grid>
                                </Box>
                            </Grid>
                            
                            
                        </Item>
                    </Grid> 
            </Grid>   
            
            </Grid>
            
        </Grid>
        
                 
    )
}