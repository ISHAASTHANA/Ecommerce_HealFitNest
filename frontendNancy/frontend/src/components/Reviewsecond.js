import * as React from 'react';
import {Typography,Paper,Button} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import Header from '../shared/Header';
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
        <Typography variant="h6" gutterBottom style={{marginLeft:'10px',fontSize:'30px'}}>
        Order summary
        </Typography>
    
      <List disablePadding>
        {products.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 ,marginLeft:'15px'}}>
            <ListItemText primary={product.name} secondary={product.Quantity} />
            <Typography variant="body2" style={{marginRight:'50px'}}>{product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 ,marginLeft:'15px'}}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700,marginRight:'50px'}}>
            Rs.600
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 ,marginLeft:'10px'}}>
            Shipping
          </Typography>
          <Typography gutterBottom style={{marginLeft:'10px'}}>Nancy Tindwani</Typography>
          <Typography gutterBottom style={{marginLeft:'10px'}}>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 ,marginLeft:'70px'}}>
            Payment details
          </Typography>
          <Grid container style={{marginLeft:'70px'}}>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.Total}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
    
      
  );
}