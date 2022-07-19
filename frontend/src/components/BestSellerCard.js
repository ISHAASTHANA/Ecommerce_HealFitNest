import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BestSellerCard(props) {
    return (
        <Card elevation={6} sx={{ minWidth: 440, borderRadius: '10px', margin: 2 }}>
            <div style={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    alt=""
                    height="240"
                    image={props.image}
                    sx={{ position: 'relative' }}
                    label='Image'
                />
                <div style={{
                    position: "absolute",
                    top: 10,
                    left: "20px",
                    padding: '20px',
                    width: '45%',
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="card-content" style={{ marginBottom: '10px' }}>
                        <Typography variant="h6">-30% off</Typography>
                        <Typography variant="h4" sx={{ fontWeight: '600' }} color="text.secondary">
                            Full Fresh Vegetable
                        </Typography>
                    </div>
                    <Button variant="outlined" sx={{color: '#000', border: '1px solid #000'}}>Shop now</Button>
                </div>
            </div>

            {/* <CardActions sx={{ display: 'flex', justifyContent: 'space-between', background: '#f5f5f5' }}>
                <Button size="small"></Button>
            </CardActions> */}
        </Card>
    )
}