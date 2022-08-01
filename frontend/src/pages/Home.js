import MovingCarousel from "../components/MovingCarousel";
import Header from "../shared/Header";
import { Grid, Typography } from "@mui/material";
import potato from '../assets/potato.jpg';
import walnuts from '../assets/walnuts.jpg';
import bread from '../assets/Brown-Bread.png';
import atta from '../assets/WholeWheatAtta.png';
import seeds from '../assets/pumkinSeeds.jpg';
import Footer from "../shared/Footer";
import Categories from "../components/Categories";
import ProductsBanner from "../components/ProductsBanner";
import BestSellerCard from "../components/BestSellerCard";
import bgImage from '../assets/BestSeller1.png';
import bgImage2 from '../assets/BestSeller2.jpg';
import quoteImage from '../assets/HealFitNest2.jpg';
import './Home.css';


export default function Home() {

    const products = [
        { name: 'Potato', image: `${potato}`, cost: 'Rs. 30.0', quantity: '1 kg' },
        { name: 'Kashmiri Walnuts', image: `${walnuts}`, cost: 'Rs. 200.0', quantity: '1 packet' },
        { name: 'Brown Bread', image: `${bread}`, cost: 'Rs. 20.0', quantity: '1 packet' },
        { name: 'Whole Wheat Atta', image: `${atta}`, cost: 'Rs. 70.0', quantity: '1 kg' },
        { name: 'Pumkin Seeds', image: `${seeds}`, cost: 'Rs. 80.0', quantity: '1 packet' },
    ]

    const bestSeller = [
        { image: { bgImage }, title: '-30% off', desc: 'Full Fresh Vegetable' },
        { image: { bgImage2 }, title: '-35% off', desc: '100% Organic Food' }
    ]



    return (
        <div className='home-container'>
            <Header />
            <MovingCarousel />

            {/* ***********************CATEGORIES******************* */}
            <Categories />

            {/* ***********************FEATURED PRODUCTS************************** */}
            <ProductsBanner type={'Featured Products'} />

            {/* ***********************BEST SELLERS************************** */}
            <Grid container className="container">
                {/* <Grid item xs={12}>
                    <div className="title" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div class="line"></div>
                        <h1 variant="h4">Best Seller</h1>
                        <div class="line"></div>
                    </div>
                </Grid> */}
                <Grid container className="banner-container">
                    <Grid item>
                        <BestSellerCard image={bgImage} text={'Full Fresh Vegetable'} />
                    </Grid>
                    <Grid item>
                        <BestSellerCard image={bgImage2} text={'Range of personal care products'} />
                    </Grid>
                </Grid>
            </Grid>

            {/* *********************DEAL OF THE DAY************************** */}

            <Grid container sx={{ m: 0, p: 0, backgroundColor: '#f8f8f8 ' }}>
                <Grid item xs={12} className='image-container'>
                    <img src='https://www.kindpng.com/picc/m/160-1609004_organic-food-vegetable-fruit-meat-organic-vegetables-png.png' className='quoteImage' alt='quote' />
                    <Typography className="text" sx={{
                        fontSize: '3rem', fontWeight: 600
                    }}>"Let food be thy medicine, thy medicine shall be thy food."</Typography>
                    <Typography variant="h5" className="text-author"><i>- Hippocartes</i></Typography>
                </Grid>
            </Grid>
            <Footer />
            {/* <Grid container className="deal-of-the-day-container"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid item xs={12} style={{ marginTop: '20px' }}>
                    <div className="title" style={{
                        padding: '5px'
                    }}>
                        <Typography variant="h4" sx={{
                            fontFamily: 'Raleway,Arial, Helvetica, sans-serif',
                            fontWeight: 'lighter',
                            padding: '1rem',
                            // backgroundColor: '#D9D9D9',
                        }}>|| DEAL OF THE DAY!! ||</Typography>
                    </div>
                </Grid>
                <Grid container className="deal-of-the-day-cards" sx={{
                    // backgroundColor: '#D9D9D9',
                    backgroundImage: `url(${bg})`,
                    marginTop: '4rem',
                    padding: '20px',
                    // margin: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {products.map((item, i) => {
                        return (
                            <Grid item>
                                <ProductCard key={i} item={item} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid> */}



        </div>

    )
}