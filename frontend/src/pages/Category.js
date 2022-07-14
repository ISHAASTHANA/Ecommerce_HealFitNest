import * as React from 'react';
import { Grid } from "@mui/material";
import Header from "../components/Header";
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import { GiFruitBowl } from "react-icons/gi";
import { GiBedLamp } from "react-icons/gi";
import { MdFaceRetouchingNatural } from "react-icons/md";
import ProdCategory from '../components/ProdCategory';
import readyToEat from '../assets/readyToEat.jpg';

const categories = [
    {
        categoryName: 'Ready To Eat',
        subCategory: ['Fruits & Vegetables', 'Snacks', 'Beverages', 'Dairy'],
        icon: <EmojiFoodBeverageIcon />
    },
    {
        categoryName: 'Grocery',
        subCategory: ['Spices', 'Dry Fruits', 'Flours & Oils', 'Grains & Pulses'],
        icon: <GiFruitBowl />

    },
    {
        categoryName: 'Personal Care',
        subCategory: ['Face', 'Hair', 'Body'],
        icon: <MdFaceRetouchingNatural />

    },
    {
        categoryName: 'Home Essentials',
        subCategory: ['Bedroom', 'Washroom', 'Puja Room', 'Garden'],
        icon: <GiBedLamp />

    },
]

// const data = [
//     { icon: <EmojiFoodBeverageIcon />, label: 'Item 1' },
//     { icon: <Dns />, label: 'Database' },
//     { icon: <PermMedia />, label: 'Storage' },
//     { icon: <Public />, label: 'Hosting' },
// ];

const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

export default function Category() {
    const [open, setOpen] = React.useState(true);
    return (
        <div className="category-container">
            <Header />
            <Grid container>
                <Grid container className='image' sx={{marginBottom: '20px'}}>
                    <img src={readyToEat} style={{ width: '100%', height: '500px', objectFit: 'cover' }} alt='category' />
                </Grid>
                <Grid container sm={3} sx={{padding: '10px'}}>
                    <Box sx={{ display: 'flex' }}>
                        <ThemeProvider
                            theme={createTheme({
                                components: {
                                    MuiListItemButton: {
                                        defaultProps: {
                                            disableTouchRipple: true,
                                        },
                                    },
                                },
                                palette: {
                                    mode: 'dark',
                                    primary: { main: 'rgb(102, 157, 246)' },
                                    background: { paper: 'rgb(5, 30, 52)' },
                                },
                            })}
                        >
                            <Paper elevation={0} sx={{ maxWidth: 256 }}>
                                <FireNav component="nav" disablePadding>
                                    <ListItemButton component="a" href="#customized-list">
                                        <ListItemText
                                            sx={{ my: 0 }}
                                            primary="Choose Category"
                                            primaryTypographyProps={{
                                                fontSize: 20,
                                                fontWeight: 'medium',
                                                letterSpacing: 0,
                                            }}
                                        />
                                    </ListItemButton>
                                    <Divider />

                                    <Divider />
                                    {categories.map((category, i) => {
                                        return (
                                            <Box
                                                sx={{
                                                    bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                                                    pb: open ? 2 : 0,
                                                }}
                                            >

                                                <ListItemButton
                                                    alignItems="flex-start"
                                                    onClick={() => setOpen(!open)}
                                                    sx={{
                                                        px: 3,
                                                        pt: 2.5,
                                                        pb: open ? 0 : 2.5,
                                                        '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                                    }}
                                                >
                                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                                        {category.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={category.categoryName}
                                                        primaryTypographyProps={{
                                                            fontSize: 15,
                                                            fontWeight: 'medium',
                                                            lineHeight: '20px',
                                                            mb: '2px',
                                                        }}
                                                        secondary={category.subCategory.join(',')}
                                                        secondaryTypographyProps={{
                                                            noWrap: true,
                                                            fontSize: 12,
                                                            lineHeight: '16px',
                                                            color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                                        }}
                                                        sx={{ my: 0 }}
                                                    />
                                                    <KeyboardArrowDown
                                                        sx={{
                                                            mr: -1,
                                                            opacity: 0,
                                                            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                                            transition: '0.2s',
                                                        }}
                                                    />
                                                </ListItemButton>
                                                {open &&
                                                    category.subCategory.map((item) => (
                                                        <ListItemButton
                                                            key={item}
                                                            sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                                        >
                                                            {/* <ListItemIcon sx={{ color: 'inherit' }}>
                                                            {item.icon}
                                                        </ListItemIcon> */}
                                                            <ListItemText
                                                                primary={item}
                                                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                                            />
                                                        </ListItemButton>
                                                    ))}
                                            </Box>

                                        )
                                    })}
                                </FireNav>
                            </Paper>
                        </ThemeProvider>
                    </Box>
                </Grid>
                <Grid container sm={9}>
                    <ProdCategory />
                </Grid>
            </Grid>
        </div>
    );
}