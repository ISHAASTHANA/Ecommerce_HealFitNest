import { Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';

export default function Footer() {
    return (
        <footer>
            <Grid container sx={{
                backgroundColor: '#282828',
                color: '#d3d3d3',
                padding: '2rem',
            }}>
                <Grid item xs={12}>
                    <EmailIcon sx={{ p: 1, m: 2, borderRadius: '50%', border: '1px solid', backgroundColor: '#5c9736', color: '#000' }} />
                    <CallIcon sx={{ p: 1, m: 2, borderRadius: '50%', border: '1px solid', backgroundColor: '#5c9736', color: '#000' }} />
                    <TwitterIcon sx={{ p: 1, m: 2, borderRadius: '50%', border: '1px solid ', backgroundColor: '#5c9736', color: '#000' }} />
                    <FacebookRoundedIcon sx={{ p: 1, m: 2, borderRadius: '50%', border: '1px solid ', backgroundColor: '#5c9736', color: '#000' }} />
                </Grid>

                <Grid item xs={12} >
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 }}>
                        <Grid item xs={1}>
                            <Typography sx={{fontWeight: '500'}} variant="h6">Home</Typography>
                        </Grid>
                        <Grid item xs={1}>
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
                        </Grid>
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