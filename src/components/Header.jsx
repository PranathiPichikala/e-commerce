import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles'; // This is the correct import for recent versions

import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import './css/Header.css';
import { Grid, Paper, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';


const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconContainer = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const InputBaseContainer = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
}));

const ButtonContainer = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(1),
}));
const imageData = [
  {
    imageSrc: "/Images/topoffers-1.png",
    heading: 'Top Offers',
  },
  {
    imageSrc: '/Images/mobile-2.jpg',
    heading: 'Mobiles',
    link: "/Category/SmartPhones",
  },
  {
    imageSrc: '/Images/electronics-3.jpg',
    heading: 'ELectronics',
    link: "/Category/electronics",
  },
  {
    imageSrc: '/Images/tv-4.jpg',
    heading: 'Tvs ',
    link: "/Category/electronics",
  },
  {
    imageSrc: '/Images/fashion-5.jpg',
    heading: 'Fashion',
    link: "/Category/Fashion",
  },
  {
    imageSrc: '/Images/beauty-6.jpg',
    heading: 'Beauty',
    link: "/Category/Beauty",
  },
  {
    imageSrc: '/Images/kitchen-7.jpg',
    heading: ' Kitchen',
    link: "/Category/Appliances",
  },
  {
    imageSrc: '/Images/furniture-8.jpg',
    heading: 'Furniture',
    link: "/Category/Furniture",
  },
  {
    imageSrc: '/Images/flight-9.jpg',
    heading: 'Flights',
    link: "/Category/Beauty",
  },

];



const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate()


  return (
    <div>
      <Navigation />

      <Grid container spacing={2} className='ecommerce-types-img'>
        {imageData.map((data, index) => (
          <Grid item xs={6} sm={4} md={2} lg={1} key={index} >
            <Paper className='paper-width'>
              <Link to={data.link}>
                <img src={data.imageSrc} alt="Image description" width="100%" height="auto" style={{ objectFit: 'cover' }} />

                <Typography variant="h6" align="center">
                  {data.heading}
                </Typography>
              </Link>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Header;