import React from'react'
import { styled } from '@mui/material/styles';
import { Grid,Box,Paper,Button} from '@mui/material';
import Typography from '@mui/material/Typography';
import { decreaseValue,increaseValue } from '../components/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  // function calculateTotal(value)
  // {
  //   debugger;
  //     var ItmPrice= parseInt(document.getElementById('ItmPrice').value);
  //     var totalPrice = ItmPrice*value;
  //     document.getElementById('totalPrice').innerText= totalPrice;
  // }

  // document.getElementById('number').addEventListener('change', function() {
  //   debugger; 
  //   console.log('You selected: ', this.value);
  // });
const Product=()=>{

    return(
      <Grid>
        <Header/>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4.8} style={{marginTop:'50px',marginLeft:'25px',marginBottom:'20px'}}>
        <Item>
            <img style={{marginTop:'10px',marginLeft:'75px'}}
            src="https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU="
          />
        </Item>
        </Grid>
        <Grid item xs={6.8} style={{marginTop:'50px',marginBottom:'20px'}}>
        <Item style={{backgroundColor:'white',align:'left'}}>
            <Typography style={{marginTop:'0px',fontSize:'70px',color:'black'}}>
               Cherry 
            </Typography>
            <Typography style={{fontSize:'20px',color:'black'}}>
               (1Box-200gm)
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography style={{marginTop:'5px',fontSize:'20px',color:'black',fontWeight:'bold'}}>
                    Price
                  </Typography>
              </Grid>
              <Grid item xs={2}>
                  <Typography style={{marginTop:'5px',fontSize:'20px',color:'black',fontWeight:'bold'}}>
                    Quantity
                  </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              
              <Grid item xs={3}>
              {/* <Typography style={{marginTop:'5px',fontSize:'30px',color:'green',fontWeight:'bold'}}>
                  RS.   
                </Typography> */}
                  <Typography id="ItmPrice" style={{marginTop:'5px',fontSize:'30px',color:'green',fontWeight:'bold'}}>
                  RS. 200   
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <form>
                    <div class="value-button" id="decrease" onClick={()=>{decreaseValue()}} value="Decrease Value"><RemoveIcon/></div>
                    {/* <input type="number" id='number' value="1" onChange={()=>{calculateTotal(this.value)}} /> */}
                    <input type="number" id='number' value="1"  />
                    <div class="value-button" id="increase" onClick={()=>{increaseValue()}} value="Increase Value"><AddIcon/></div>
                  </form>
              </Grid>
            </Grid>
            <Typography style={{marginTop:'10px',fontSize:'20px',color:'black',fontWeight:'normal'}}>
                  Description
            </Typography>
            <Typography style={{marginTop:'10px',fontSize:'15px',color:'grey',marginRight:'20px'}}>
                  It’s cherry season again! They’re fresh, plentiful, beautiful, and delicious, but, you may be wonderingare cherries actually that good for you? The answer is yes, 100 times yes! Cherries are not only one of the healthiest fruits, they also rank as one of the most health protective foods overall. 
                  .Cherry are full of antioxidants.
                  They protect against diabetes.
                  .They Promote Healthy Sleep
                  .They can provide arthritis relief
            </Typography>
            
             {/*} <Grid item xs={5}>
                <Typography style={{marginTop:'25px',fontSize:'30px',color:'grey',fontWeight:'bold'}}>
                    Total Price : Rs 200
                  </Typography>
                  {/* <Typography id="totalPrice" style={{marginTop:'25px',fontSize:'30px',color:'grey',fontWeight:'bold'}}>
                    
                  </Typography> 
              </Grid>*/}
              
              <Box sx={{width: 800,height: 35,backgroundColor: '#ac8787',marginTop:'25px',marginLeft:'30px',marginBottom:'8px' }}>
            <Button variant="contained" fullWidth style={{backgroundColor:'rgb(129, 184, 124)'}}>Add to cart</Button>
            </Box>
              
        </Item>
        </Grid>
      </Grid>
      </Box>
      <Footer/>
      </Grid>
      
    )

}
    
export default Product;