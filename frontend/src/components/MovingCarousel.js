import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid } from '@mui/material'
import organic from '../assets/sliderImage1.jpg'
import organic1 from '../assets/sliderImage2.jpg'
import organic2 from '../assets/sliderImage3.jpg'
import organic3 from '../assets/sliderImage4.jpg'


export default function MovingCarousel() {
    const items = [
        {
            image: `${organic1}`,
        },
        {
            image: `${organic}`,
        },
        {
            image: `${organic2}`,
        },
        {
            image: `${organic3}`,
        }
    ]

    return (
        <Carousel animation='slide' navButtonsAlwaysVisible duration={300}>
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
                <img src={props.item.image} alt='carousel' height='580px' style={{width: '100%', objectFit: 'cover'}} />
            </Grid>
        </Grid>
    )
}