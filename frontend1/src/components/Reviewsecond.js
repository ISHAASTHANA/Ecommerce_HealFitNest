import * as React from 'react';
import {Typography,Paper,Button} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
const products = [
  {
    name: 'Cherry',
    Quantity:'1box-200gm',
    price: 'Rs.200',
  },
  {
    name: 'Almonds',
    Quantity:'1box-100gm',
    price: 'Rs.100',
  },
  {
    name: 'Onion',
    Quantity:'1Kg',
    price: 'Rs.200',
  },
  
  { name: 'Shipping', desc: '', price: 'Rs.100' },
];

const addresses = ['Akshya Nagar', '1st Block 1st Cross', 'Rammurthy nagar', 'Bangalore-560016'];
const payments = [
  { name: 'Cash on Delivery', Total: 'Rs.600' },
];

export default function Reviewsecond() {
    const navigate=useNavigate();
  return (
    <Grid>
        <Header/>
        <Paper elevation={10} style={{height:'80vh',width:'510px',marginTop:'40px',marginLeft:'530px'}}>
        <Typography variant="h6" gutterBottom style={{marginLeft:'20px',marginTop:'10px',fontSize:'30px',textAlign:'center'}}>
        Order summary
      </Typography>
      <List disablePadding >
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 ,marginLeft:'20px'}}>
            <ListItemText primary={product.name} secondary={product.Quantity} />
            <Typography variant="body2" style={{marginRight:'50px'}}>{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 ,marginLeft:'20px'}}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 ,marginRight:'49px'}}>
            Rs.600
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 ,marginLeft:'20px'}}>
            Shipping
          </Typography>
          <Typography gutterBottom style={{marginLeft:'20px'}}>Aditya Joshi </Typography>
          <Typography gutterBottom style={{marginLeft:'20px'}}>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 ,marginLeft:'60px'}}>
            Payment details
          </Typography>
          <Grid container style={{marginLeft:'60px'}}>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6} >
                  <Typography gutterBottom >{payment.Total}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Button variant="contained" onClick={() => navigate('/cart')} style={{maxWidth:'150px',maxHeight:'30px',minWidth:'150px',minHeight:'30px',marginTop:'10px',marginLeft:'20px',marginRight:'0px',backgroundColor:'rgb(62 114 62)'}}>
             Buy more
        </Button>
    </Paper>
    </Grid>
    
      
  );
}