import { Button, Grid, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <footer>
            <Grid container sx={{
                backgroundColor: '#282828',
                color: '#d3d3d3',
                padding: '2rem',
            }}>
                
                    <Grid item xs={6} sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2}}>
                            <EmailIcon sx={{ p: 1, m: 1, borderRadius: '50%', border: '1px solid', backgroundColor: '#5c9736', color: '#000' }}/> 
                            <Typography>upcurveteamh@gmail.com</Typography>
                    </Grid>
                    <Grid item xs = {6} sx = {{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2}}>
                        <CallIcon sx={{ p: 1, m: 1, borderRadius: '50%', border: '1px solid', backgroundColor: '#5c9736', color: '#000' }} />
                        <Typography>Contact us: 9999900000</Typography>
                    </Grid>
                    <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2}}>    
                        <Grid>
                            <Button href="https://twitter.com/target"><TwitterIcon sx={{ p: 1, m: 2, borderRadius: '50%', border: '1px solid ', backgroundColor: '#5c9736', color: '#000' }} /></Button>                            
                        </Grid>
                        <Grid>
                            <Button href="https://www.facebook.com/target/"><FacebookRoundedIcon sx={{ p: 1, m: 2, borderRadius: '50%', border: '1px solid ', backgroundColor: '#5c9736', color: '#000' }} /></Button>                            
                        </Grid>
                        <Grid>
                            <Button href="https://www.instagram.com/target/"><InstagramIcon sx = {{p:1, m:2, borderRadius:'50%', border:'1px solid', backgroundColor: '#5c9736', color: '#000'}}/></Button>        
                        </Grid> 
                    </Grid>

                <Grid item xs={12} >
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 }}>
                        <Grid item xs={1}>
                           <Button href="/" style={{color:"White"}}><Typography sx={{fontWeight: '500'}} variant="h6">Home</Typography></Button>
                        </Grid>
                        {/* <Grid item xs={1}>
                            <Typography sx={{fontWeight: '500'}} variant="h6">Services</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography sx={{fontWeight: '500'}} variant="h6">About</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography sx={{fontWeight: '500'}} variant="h6">Terms</Typography>
                        </Grid>
                        <Grid item xs={1.2}>
                            <Typography sx={{fontWeight: '500'}} variant="h6">Privacy policy</Typography>
                        </Grid> */}
                    </Grid>
                </Grid>

            </Grid>
            <div style={{ backgroundColor: '#5c963a', color: 'white ', padding: '1rem' }}>
                <Typography variant="body2">
                    © 2022 HealFitNest. All rights reserved
                </Typography>
            </div>
        </footer>
    )
}