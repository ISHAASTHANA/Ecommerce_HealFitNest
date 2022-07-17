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
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent:'start'
                }}>
                    <div className="card-content" style={{marginBottom: '10px'}}>
                        <Typography variant="h6" sx={{ fontWeight: '600' }} color="text.secondary">
                            Fruits & Vegetables
                        </Typography>
                        <Typography variant="body1">
                            Onion, Potato, Tomato, Cabbage, Cauliflower, Bitter Guard, Ginger,
                            Radish, Carrot, Beetroot
                        </Typography>
                    </div>
                    <Button variant="contained">Shop now</Button>
                </div>
            </div>

            {/* <CardActions sx={{ display: 'flex', justifyContent: 'space-between', background: '#f5f5f5' }}>
                <Button size="small"></Button>
            </CardActions> */}
        </Card>
    )
}