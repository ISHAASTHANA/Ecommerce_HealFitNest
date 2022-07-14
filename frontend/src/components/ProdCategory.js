import { Grid, Typography } from "@mui/material"
import ProductCard from "./ProductCard"
import potato from '../assets/potato.jpg';
import strawberry from '../assets/strawberry.jpg';
import greenTea from '../assets/Green-tea.jpg';
import coffeeBeans from '../assets/coffeeBeans.jpg';
import cheese from '../assets/cheese.jpg';

const categories = [
    {
        categoryName: 'Ready To Eat',
        subCategory: {
            fruitVeggies: [
                { name: 'Coffee Beans', image: `${coffeeBeans}`, cost: 'Rs. 299.0', quantity: '1 packet' },
                { name: 'Strawberry', image: `${strawberry}`, cost: 'Rs. 200.0', quantity: '1 packet' },
                { name: 'Cheese', image: `${cheese}`, cost: 'Rs. 50.0', quantity: '1 packet' },
                { name: 'Green Tea', image: `${greenTea}`, cost: 'Rs. 300.0', quantity: '1 kg' },
                { name: 'Potato', image: `${potato}`, cost: 'Rs. 30.0', quantity: '1 kg' }
            ],
            snacks: ['namkeen', 'biscuits', 'chips', 'granola'],
            beverages: ['green tea', 'tea', 'oragnic tea'],
            dairy: ['milk', 'paneer']
        },
        // icon: <EmojiFoodBeverageIcon />
    },
    // {
    //     categoryName: 'Grocery',
    //     subCategory: ['Spices', 'Dry Fruits', 'Flours & Oils', 'Grains & Pulses'],
    //     // icon: <GiFruitBowl />

    // },
    // {
    //     categoryName: 'Personal Care',
    //     subCategory: ['Face', 'Hair', 'Body'],
    //     // icon: <MdFaceRetouchingNatural />

    // },
    // {
    //     categoryName: 'Home Essentials',
    //     subCategory: ['Bedroom', 'Washroom', 'Puja Room', 'Garden'],
    //     // icon: <GiBedLamp />

    // },
]

export default function ProdCategory() {
    return (
        <div className="category-container">
            {categories.map((category, i) => {
                return (
                    // <ProductCard category={} key={i} />
                    // {category.subCategory.fruitVeggies.map((product, i) => {
                    //     <ProductCard item={product} key={i} />
                    // }) }
                    <div>
                        <Typography variant="h3" sx={{ textAlign: 'left'}}>{category.categoryName}</Typography>

                        <Grid container style={{
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center'
                        }}>
                            {category.subCategory.fruitVeggies.map((item, i) => {
                                return (
                                    <Grid item>
                                        <ProductCard item={item} key={i} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                )
            })}
        </div>
    )
}