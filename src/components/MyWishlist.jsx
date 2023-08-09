import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import "./css/Mywishlist.css"
import { MdDelete } from 'react-icons/md'


const MyWishlist = () => {

  const wishList = JSON.parse(localStorage.getItem("wish")) || [];

  // console.log(wishList)
  const [otp, setOtp] = useState('');


  const [wishlistItems, setWishlistItems] = useState(wishList);

  console.log(wishlistItems)

  const handleItemRemove = (id) => {
    const updatedItems = wishlistItems.filter((item) => item.id !== id);
    setWishlistItems(updatedItems);
    localStorage.setItem('wishlistItems', JSON.stringify(updatedItems));
  }

  return (
    <Container className='Mycontainer'>
      {/* <CssBaseline /> */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card className='Card_001'>
            <Typography variant="h5" component="div" gutterBottom>
              My Wishlist
            </Typography>
          </Card>
          <Card className='Card_002'>
            <CardContent>
              <Grid>
                {wishlistItems && wishlistItems.map((item, index) => {
                  console.log({item})
                  return (
                    <div className='Card_div'>
                      <img
                        style={{ width: '100px', height: '100px', marginRight: '20px' }}
                        src={item.images}
                        alt='image'
                      />
                      <div className='wishlist-detais'>
                        <div className='rating2'>
                          <h4>{item.title} </h4>
                          <span>{item.rating} ★</span>
                          <span>{item.stock}</span>
                        </div>
                        <div className='costtt'>
                          <span>₹{item.price}</span>
                          <span>₹12,999</span>
                          <span>{item. discountPercentage}% off</span>
                        </div>
                      </div>
                      <div className='delete_button'>
                        <MdDelete onClick={()=>handleItemRemove(item.id)} />
                      </div>
                    </div>
                  )
                })}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
    </Container>
  );
};

export default MyWishlist
