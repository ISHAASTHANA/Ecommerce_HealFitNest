import React from 'react';
import { Grid, Typography } from '@mui/material';
import readyToEat from '../assets/1.png';
import groceries from '../assets/2.png';
import personalCare from '../assets/3.png';
import homeEssential from '../assets/4.png';

const category = [
    { name: 'Ready To Eat', image: `${readyToEat}`, color: '#e65c5b' },
    { name: 'Personal Care', image: `${groceries}`, color: '#cca365' },
    { name: 'Home Essentials', image: `${personalCare}`, color: '#85c147' },
    { name: 'Groceries', image: `${homeEssential}`, color: '#7e5a40' },
]


export default function Categories() {
    return (
        <Grid container>
            <Grid container className="featured-category-container" sx={{
                display: 'flex',
                justifyContent: 'center',
                padding: '1rem'
            }}>
                {category.map((item, i) => {
                    return (
                        <Grid item xs={6} sm={3} >
                            <img 
                                style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
                                key={i} src={item.image}
                                alt={item.name} />
                            <Typography variant="h5" sx={{
                                padding: '10px',
                                borderRadius: '10px',
                                margin: '10px',
                                fontWeight: '600',
                                color: `${item.color}`
                            }}>{item.name}</Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>

    )
}