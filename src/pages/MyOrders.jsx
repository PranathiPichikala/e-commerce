import React from 'react'
import Navigation from '../components/Navigation'
import NavigationBottom from '../components/NavigationBottom'
import "./css/MyOrders.css"
import { Box, Card, CardContent, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import { useState } from 'react'
import Brightness1Icon from '@mui/icons-material/Brightness1';

const MyOrders = () => {

    const [wishlistItems, setWishlistItems] = useState([
        { id: 1, name: 'Iphone', color: "red", price: 699, imageUrl: 'https://img.freepik.com/free-vector/realistic-smartphone-official-colors_52683-51019.jpg?w=826&t=st=1692005791~exp=1692006391~hmac=0bce72ba14c2ebed5e9aa3ab363f2df5cd8ed4c79c305090ec3aa82163f659b2' },
        { id: 2, name: 'OnePlus', color: "green", price: 699, imageUrl: 'https://img.freepik.com/free-vector/realistic-smartphone-official-colors_52683-51019.jpg?w=826&t=st=1692005791~exp=1692006391~hmac=0bce72ba14c2ebed5e9aa3ab363f2df5cd8ed4c79c305090ec3aa82163f659b2' },
        { id: 3, name: 'Oppo', color: "blue", price: 699, imageUrl: 'https://img.freepik.com/free-vector/realistic-smartphone-official-colors_52683-51019.jpg?w=826&t=st=1692005791~exp=1692006391~hmac=0bce72ba14c2ebed5e9aa3ab363f2df5cd8ed4c79c305090ec3aa82163f659b2' },
    ]);


    const Test = () => {
        return (
            <>
                <Brightness1Icon className="_8okv" />
                <span style={{ marginLeft: "10px" }}>Delivered in Feb 14</span>
            </>
        )
    }
    return (
        <div>
            <Navigation />
            <NavigationBottom />
            <Grid className="_0qzz" container spacing={2}>
                <Grid className="_6exi" item xs={3}>
                    <Typography variant='h5'> Filters</Typography>
                    <div className="_8rby">
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">ORDER STATUS</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Delivered"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="On the Way"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Cancelled"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Return"
                                />
                            </FormGroup>
                        </FormControl>
                        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                            <FormLabel component="legend">ORDER TIME</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Last 30 days"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="2022"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="2021"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox />
                                    }
                                    label="Older"
                                />
                            </FormGroup>
                        </FormControl>
                    </div>
                </Grid>
                <Grid className="_4gqh" item xs={9}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                My Orders
                            </Typography>
                            <List className="_2gpu">
                                {wishlistItems.map((item) => (
                                    <ListItem className="_8jfi" key={item.id}>
                                        <img src={item.imageUrl} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
                                        <ListItemText primary={item.name} secondary={`Color: ${item.color}`} />
                                        <ListItemText primary={`Price: $${item.price}`} />
                                        <ListItemText primary={<Test />} secondary={"your item has been Delivered"} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default MyOrders