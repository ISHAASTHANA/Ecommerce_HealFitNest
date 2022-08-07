import MovingCarousel from "../components/MovingCarousel";
import Header from "../shared/Header";
import { Grid } from "@mui/material";
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
                <Grid item xs={12}>
                    <div className="title" >
                        <div class="line"></div>
                        <h1 variant="h4">Best Seller</h1>
                        <div class="line"></div>
                    </div>
                </Grid>
                <Grid container className="banner-container">
                    <Grid item xs={6} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <BestSellerCard image={bgImage}  />
                    </Grid>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <BestSellerCard image={bgImage2}  />
                    </Grid>
                </Grid>
            </Grid>

            {/* *********************DEAL OF THE DAY************************** */}
            <ProductsBanner type={'Deal of the Day'} />
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


            <Footer />
        </div>

    )
}