import React from 'react';
import { Grid } from "@mui/material"
import ProductCard from "./ProductCard"
import { useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

// const categories = [
//     {
//         categoryName: 'Ready To Eat',
//         subCategory: {
//             fruitVeggies: [
//                 { name: 'Coffee Beans', image: `${coffeeBeans}`, cost: 'Rs. 299.0', quantity: '1 packet' },
//                 { name: 'Strawberry', image: `${strawberry}`, cost: 'Rs. 200.0', quantity: '1 packet' },
//                 { name: 'Cheese', image: `${cheese}`, cost: 'Rs. 50.0', quantity: '1 packet' },
//                 { name: 'Green Tea', image: `${greenTea}`, cost: 'Rs. 300.0', quantity: '1 kg' },
//                 { name: 'Potato', image: `${potato}`, cost: 'Rs. 30.0', quantity: '1 kg' }
//             ],
//             snacks: ['namkeen', 'biscuits', 'chips', 'granola'],
//             beverages: ['green tea', 'tea', 'oragnic tea'],
//             dairy: ['milk', 'paneer']
//         },
//         // icon: <EmojiFoodBeverageIcon />
//     },
//     // {
//     //     categoryName: 'Grocery',
//     //     subCategory: ['Spices', 'Dry Fruits', 'Flours & Oils', 'Grains & Pulses'],
//     //     // icon: <GiFruitBowl />

//     // },
//     // {
//     //     categoryName: 'Personal Care',
//     //     subCategory: ['Face', 'Hair', 'Body'],
//     //     // icon: <MdFaceRetouchingNatural />

//     // },
//     // {
//     //     categoryName: 'Home Essentials',
//     //     subCategory: ['Bedroom', 'Washroom', 'Puja Room', 'Garden'],
//     //     // icon: <GiBedLamp />

//     // },
// ]

const baseUrl = 'http://localhost:8989/api/v7';
const categories = {
    products: []
}

export default function ProdCategory(data) {
    const [state, setState] = React.useState(categories)
    const params = useParams();

    useEffect(() => {
        axios.get(`${baseUrl}/categories/${params.categoryName}/${data.subCategory}`).then((response) => {
            if (params.categoryName) {
                setState({
                    products: response.data.slice(0,3)
                })
            } else {
                setState({
                    products: response.data
                })
            }
        }).catch(error => {
                    if (!error.response) {
                        // network error
                        console.log('Error: Network Error');
                    } else {
                        console.log(error.response);
                    }
                })
    //     axios.get(`${baseUrl}/items`).then((response) => {
    //         // if (params.categoryName == 'Ready To Eat') {
    //         //     setState({
    //         //         products: response.data.slice(9, 19)

    //         //     })
    //         // } else if (params.categoryName == 'Personal Care') {
    //         //     setState({
    //         //         products: response.data.slice(0, 9)
    //         //     })
    //         // }
    //     }).catch(error => {
    //         if (!error.response) {
    //             // network error
    //             console.log('Error: Network Error');
    //         } else {
    //             console.log(error.response);
    //         }
    //     })
    }, []);

    return (
        <div className="category-container">

            <Grid container style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center'
            }}>
                {state.products.map((item, i) => {
                    return (
                        <Grid item>
                            <ProductCard item={item} key={i} />
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    )
}