import MovingCarousel from "../components/MovingCarousel";
import Header from "../components/Header";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";
import potato from '../assets/potato.jpg';
import walnuts from '../assets/walnuts.jpg';
import bread from '../assets/Brown-Bread.png';
import atta from '../assets/WholeWheatAtta.png';
import seeds from '../assets/pumkinSeeds.jpg';
import onion from '../assets/onion.jpeg';
import jaggery from '../assets/jaggeryPowder.jpg';
import mint from '../assets/mint.jpg';
import ghee from '../assets/desiGhee.jpg';
import milk from '../assets/milk.jpg';
import readyToEat from '../assets/ready-eat-foods.jpg';
import groceries from '../assets/groceries.jpg';
import personalCare from '../assets/Organic-Beauty.jpg';
import homeEssential from '../assets/homeEssentials.jpg';
import Footer from "../components/Footer";
import Login from "./Login";

export default function Home() {

    const products = [
        { name: 'Potato', image: `${potato}`, cost: 'Rs. 30.0', quantity: '1 kg' },
        { name: 'Kashmiri Walnuts', image: `${walnuts}`, cost: 'Rs. 200.0', quantity: '1 packet' },
        { name: 'Brown Bread', image: `${bread}`, cost: 'Rs. 20.0', quantity: '1 packet' },
        { name: 'Whole Wheat Atta', image: `${atta}`, cost: 'Rs. 70.0', quantity: '1 kg' },
        { name: 'Pumkin Seeds', image: `${seeds}`, cost: 'Rs. 80.0', quantity: '1 packet' },
    ]

    const bestSellers = [
        { name: 'Onion', image: `${onion}`, cost: 'Rs. 40.0', quantity: '1 kg' },
        { name: 'Jaggery Powder', image: `${jaggery}`, cost: 'Rs. 400.0', quantity: '1 kg' },
        { name: 'Mint Leaves', image: `${mint}`, cost: 'Rs. 70.0', quantity: '1 bunch' },
        { name: 'Desi Ghee', image: `${ghee}`, cost: 'Rs. 300.0', quantity: '1 kg' },
        { name: "Cow's Milk", image: `${milk}`, cost: 'Rs. 60.0', quantity: '1 kg' },
    ]

    const category = [
        { name: 'Ready To Eat', image: `${readyToEat}` },
        { name: 'Groceries', image: `${groceries}` },
        { name: 'Personal Care', image: `${personalCare}` },
        { name: 'Home Essentials', image: `${homeEssential}` },
    ]

    return (
        <div className='home-container'>
            <Header />
            <MovingCarousel />

            {/* *********************DEAL OF THE DAY************************** */}
            <Grid container className="deal-of-the-day-container">
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                    <div className="title" style={{
                        backgroundColor: '#D9D9D9',
                        padding: '5px'
                    }}>
                        <h1>DEAL OF THE DAY!!</h1>
                    </div>
                </Grid>
                <Grid container className="deal-of-the-day-cards" style={{
                    backgroundColor: '#D9D9D9',
                    marginTop: '4rem',
                    padding: '20px',
                    margin: '20px'
                }}>
                    {products.map((item, i) => {
                        return (
                            <Grid item>
                                <ProductCard key={i} item={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>

            {/* ***********************FEATURED CATEGORIES******************* */}
            <Grid container>
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                    <div className="title" style={{
                        backgroundColor: '#D9D9D9',
                        padding: '5px'
                    }}>
                        <h1>Featured Categories</h1>
                    </div>
                </Grid>
                <Grid container className="featured-category-container" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: '2rem'
                }}>
                    {category.map((item, i) => {
                        return (
                            <Grid item sx={{ padding: '20px', margin: '10px' }}>
                                <img width='250px'
                                    height='250px'
                                    style={{ borderRadius: '50%' }}
                                    key={i} src={item.image}
                                    alt={item.name} />
                                <Typography variant="h6" sx={{
                                    backgroundColor: '#d9d9d9',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    margin: '10px'
                                }}>{item.name}</Typography>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>

            {/* ***********************BEST SELLERS************************** */}
            <Grid container className="best-sellers-container" sx={{ marginBottom: '4rem' }}>
                <Grid item xs={12} style={{ marginTop: '30px' }}>
                    <div className="title" style={{
                        backgroundColor: '#D9D9D9',
                        padding: '5px'
                    }}>
                        <h1>BEST SELLERS</h1>
                    </div>
                </Grid>
                <Grid container className="deal-of-the-day-cards" style={{
                    backgroundColor: '#D9D9D9',
                    marginTop: '4rem',
                    padding: '20px',
                    margin: '20px'
                }}>
                    {bestSellers.map((item, i) => {
                        return (
                            <Grid item>
                                <ProductCard key={i} item={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>

            <Footer />
        </div>

    )
}