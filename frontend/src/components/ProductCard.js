import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard(props) {
  return (
    <Card elevation={6} sx={{ maxWidth: 240, borderRadius: '10px', margin: 2}}>
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography varaint='h5' gutterBottom sx={{fontWeight: '600'}}>
          {props.item.name}      {props.item.quantity}     
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={props.item.name}
        height="240"
        image={props.item.image}
      />

      <CardActions sx={{display: 'flex', justifyContent: 'space-between', background: '#f5f5f5'}}>
      <Typography variant="body2" sx={{fontWeight: '600'}} color="text.secondary">
        {props.item.cost}
        </Typography>

        <Button size="small"><AddShoppingCartIcon sx={{color: '#267919'}} /></Button>
      </CardActions>
    </Card>
  );
}
