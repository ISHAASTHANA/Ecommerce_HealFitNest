import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import onion from '../assets/onion.jpeg';
import jaggery from '../assets/jaggeryPowder.jpg';
import mint from '../assets/mint.jpg';
import ghee from '../assets/desiGhee.jpg';
import milk from '../assets/milk.jpg';
import './ProductsBanner.css';

const bestSellers = [
    { name: 'Onion', image: `${onion}`, cost: 'Rs. 40.0', quantity: '1 kg' },
    { name: 'Jaggery Powder', image: `${jaggery}`, cost: 'Rs. 400.0', quantity: '1 kg' },
    { name: 'Mint Leaves', image: `${mint}`, cost: 'Rs. 70.0', quantity: '1 bunch' },
    { name: 'Desi Ghee', image: `${ghee}`, cost: 'Rs. 300.0', quantity: '1 kg' },
    { name: "Cow's Milk", image: `${milk}`, cost: 'Rs. 60.0', quantity: '1 kg' },
]

export default function ProductsBanner(props) {
    return (
        <Grid container className="container" >
            <Grid item xs={12}>
                <div className="title" >
                    <div class="line"></div>
                    <h1 variant="h4">{props.type }</h1>
                    <div class="line"></div>
                </div>
            </Grid>
            <Grid container className="banner-container" >
                {bestSellers.map((item, i) => {
                    return (
                        <Grid item sx={{ display: 'flex', justifyContent: 'center'}}>
                            <ProductCard key={i} item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>

    )
}