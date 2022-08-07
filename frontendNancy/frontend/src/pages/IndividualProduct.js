import React from'react'
import { styled } from '@mui/material/styles';
import { Grid,Box,Paper,Link,IconButton,Button,TextField,Avatar} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import QuestionMarkTwoToneIcon from '@mui/icons-material/QuestionMarkTwoTone';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShareIcon from '@mui/icons-material/Share';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Cherry from '../Images/Cherrynew.jpg';
import './IP.css'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
const Product=()=>{

    return(
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4.8} style={{marginTop:'50px',marginLeft:'25px'}}>
        <Item class="Photo">
            <Grid align='right'>
            <FavoriteBorderOutlinedIcon style={{marginRight:'10px',marginTop:'10px',align:'right'}}/>
            <ShareIcon style={{marginRight:'10px',marginTop:'10px',align:'right'}}/>
            </Grid>
            <img src={'https://media.istockphoto.com/photos/cherry-trio-with-stem-and-leaf-picture-id157428769?b=1&k=20&m=157428769&s=170667a&w=0&h=F1PxAjsNGhS0svv0t_kMRYdAE3UGISZD_BY066-SubU='}/>
        </Item>
        </Grid>
        <Grid item xs={6.8} style={{marginTop:'50px'}}>
        <Item style={{backgroundColor:'#cebcbc',align:'left'}}>
            <Typography style={{marginTop:'0px',fontSize:'30px',color:'black'}}>
               Cherry 
            </Typography>
            <Typography style={{marginTop:'3px',fontSize:'17px',color:'black'}}>
               (1Box-200gm)
            </Typography>
            <Grid container spacing={2} style={{marginTop:'10px',color:'black',marginLeft:'3px'}}>
            <StarIcon style={{fontSize:'large'}}/><StarIcon style={{fontSize:'large'}}/><StarIcon style={{fontSize:'large'}}/><StarIcon style={{fontSize:'large'}}/><StarBorderIcon style={{fontSize:'large'}}/>
            <Typography style={{marginTop:'0px',marginLeft:'8px',fontSize:'15px',color:'black'}}>
               4/5
            </Typography>
            <TrendingUpTwoToneIcon style={{marginLeft:'40px',color:'#746969'}}/>
            <Link href="#" color="inherit" style={{marginLeft:'7px',marginBottom:'8px',marginTop:'0px'}}>
            {'600 ratings and 50 reviews'}
            </Link>
            <Link href="#" color="inherit" style={{marginLeft:'12px',marginBottom:'8px',marginTop:'0px'}}>
            {'Q&As'}
            </Link>
            <QuestionMarkTwoToneIcon style={{fontSize:'15px',color:'#746969'}}/>
            </Grid>
            <Typography style={{marginTop:'5px',marginLeft:'8px',fontSize:'15px',color:'#015c01',fontWeight:'bold'}}>
               Rs.200
            </Typography>
            <Grid container spacing={2} style={{marginTop:'10px',color:'black',marginLeft:'3px'}}>
            <Typography style={{marginTop:'2px',marginLeft:'6px',fontSize:'15px',color:'black',fontWeight:'bold'}}>
               Qty:
            </Typography>
            <IconButton aria-label="add">
            <AddCircleRoundedIcon style={{marginTop:'-7px',color:'black'}}/>
            </IconButton>
            <Box sx={{width: 60,height: 24,backgroundColor: '#ac8787',alignContent:'center' }}>
            <Typography style={{marginTop:'2px',marginLeft:'25px',fontSize:'15px',color:'white',fontWeight:'bold'}}>
               1
            </Typography>
            </Box>
            <IconButton aria-label="remove">
            <RemoveCircleIcon style={{marginTop:'-7px',color:'black'}}/>
            </IconButton>
            </Grid>
            <Grid container spacing={2}>
            <LocationOnIcon style={{marginTop:'32px',marginLeft:'20px',color:'black',fontSize:'large'}}/>
            <Typography style={{marginTop:'30px',marginLeft:'3px',fontSize:'17px',color:'black'}}>
               Delivery Options
            </Typography>
            </Grid>
            <Grid container spacing={2}>
            <TextField style={{marginTop:'25px',marginLeft:'30px'}}
          id="filled-search"
          label="Enter Pincode"
          type="search"
          variant="filled"
        />
          <Button variant="contained" style={{maxWidth:'64px',maxHeight:'35px',minWidth:'30px',minHeight:'30px',marginTop:'33px',marginLeft:'10px',backgroundColor:'#3d81b8'}}>
             Verify
          </Button>
            </Grid>
            <Grid container spacing={2}>
            <Box sx={{width: 350,height: 35,backgroundColor: '#ac8787',alignContent:'center',marginTop:'60px',marginLeft:'70px',marginBottom:'8px' }}>
            <Button variant="contained" fullWidth style={{backgroundColor:'#026902'}}>Buy now</Button>
            </Box>
            <Box sx={{width: 350,height: 35,backgroundColor: '#ac8787',marginTop:'60px',marginLeft:'30px',marginBottom:'8px' }}>
            <Button variant="contained" fullWidth style={{backgroundColor:'#026902'}}>Add to cart</Button>
            </Box>
            </Grid>
        </Item>
        </Grid>
      </Grid>
      <Typography style={{marginTop:'80px',marginLeft:'20px',fontSize:'25px',color:'grey',fontWeight:'bold'}}>
        About product
      </Typography>
      <Typography style={{marginTop:'10px',marginLeft:'20px',fontSize:'15px',color:'grey',marginRight:'20px'}}>
      It’s cherry season again! They’re fresh, plentiful, beautiful, and delicious, but, you may be wonderingare cherries actually that good for you? The answer is yes, 100 times yes! Cherries are not only one of the healthiest fruits, they also rank as one of the most health protective foods overall. 
1.Cherry are full of antioxidants.
2.they protect against diabetes.
3.They Promote Healthy Sleep
4.They can provide arthritis relief
5.They lower the risk of gout attacks 
6.They curb cholesterol
7.They reduce post exercise painVariety -Durone Nero Heart-shaped. Firm, fibrous, sweet, not very juicy. Flavour excellent (considered one of the best in the world by connossieurs.)
      </Typography>
      <Typography style={{marginTop:'35px',marginLeft:'20px',fontSize:'25px',color:'grey',fontWeight:'bold'}}>
        Ratings and reviews
      </Typography>
      <Grid container spacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={11} style={{marginTop:'30px',marginLeft:'35px',marginBottom:'50px'}}>
        <Item style={{backgroundColor:'#f1e7e7'}}>
          <Grid container spacing={2}>
          <Avatar style={{marginLeft:'15px',marginTop:'24px'}} sx={{ width: 30, height: 30 }}></Avatar>
            <Typography style={{marginLeft:'15px',marginTop:'25px',fontWeight:'bold'}}>
            Riddhima Rao
            </Typography>
          <Typography style={{marginLeft:'15px',marginTop:'25px',fontWeight:'bold'}}>
            (4/5)
          </Typography>
          </Grid>
          <Typography style={{marginLeft:'45px',marginTop:'0px'}}>
          Good quality, tasted good.
          </Typography> 
          <Grid container spacing={2}>
          <Avatar style={{marginLeft:'15px',marginTop:'24px'}} sx={{ width: 30, height: 30 }}></Avatar>
            <Typography style={{marginLeft:'15px',marginTop:'25px',fontWeight:'bold'}}>
            Anjali Tyagi
            </Typography>
          <Typography style={{marginLeft:'15px',marginTop:'25px',fontWeight:'bold'}}>
            (4.5/5)
          </Typography>
          </Grid>
          <Typography style={{marginLeft:'45px',marginTop:'0px'}}>
          Good and fresh.
          </Typography> 
        </Item>
        </Grid>
        </Grid>
    </Box>
  
    )

}
    
export default Product;