import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'
import slider1 from "../assets/home.jpg";
import slider2 from "../assets/home1.jpg";
import slider3 from "../assets/home2.jpg";
import './MovingCarousel.css';


export default function MovingCarousel() {
    const items = [
        {
            image: `${slider1}`, title: 'Healthy you', desc: 'happy Us'
        },
        {
            image: `${slider3}`, title: 'Aromatic Spices', desc: 'to flavour your dishes'
        },
        {
            image: `${slider2}`, title: 'The best ', desc: 'in quality'
        },
    ]

    return (
        <Carousel animation='slide' duration={500}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Grid container>
            <Grid item xs={12}>
                <div className='slide'>
                    <div className='slider-image'>
                        <img src={props.item.image}
                            alt='carousel'/>
                    </div>
                    <div className='meta' >
                        <h1><span className='title-emphasis'>Healthy</span> you</h1>
                        <p>happy <span className='title-emphasis'>Us</span></p>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}