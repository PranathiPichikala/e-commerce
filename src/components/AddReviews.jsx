import { Grid, Typography } from '@mui/material'
import React from 'react'
import "./css/RatingsAndReviews.css"

const AddReviews = () => {
    return (
        <div className="_4qdb">
            <Grid className='_title' >
                <Typography variant='h5'>
                    Reviews & ratings
                </Typography>
            </Grid>
            <Grid className='product_details'>
                <Typography>
                    Product details
                </Typography>
                <img src='logoooo.jpg' alt='images' />
            </Grid>
        </div>
    )
}

export default AddReviews