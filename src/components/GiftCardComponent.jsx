import React from 'react'
import "./css/GiftComp.css";
import { Grid, Paper, Typography } from '@mui/material';
import Navigation from "./Navigation";
import NavigationBottom from "./NavigationBottom";
import { useNavigate } from "react-router-dom";
const GiftData = [
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/kfbfr0w0/e-gift-voucher/j/4/9/app-google-play-100-original-imafvtyheh9mfbrn.jpeg?q=70",
    title: 'Apps & Subscription',
    offer: 'Up to 50% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/xif0q/e-gift-voucher/t/e/r/open-anyone-apple-200-original-imaggtxaeaegfcg3.jpeg?q=70",
    title: 'Enterntainment',
    offer: 'Up to 50% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/kdhphu80/e-gift-voucher/k/z/t/app-myntra-5000-original-imafudbeugahgmzh.jpeg?q=70",
    title: 'Fashion',
    offer: 'Up to 10% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/kn4xhu80/e-gift-voucher/f/j/l/open-himalaya-50-original-imagfvjgzmsrhbb7.jpeg?q=70",
    title: 'Health & wellness',
    offer: 'Up to 20% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/kg40k280/e-gift-voucher/h/y/g/gold-jewellery-tanishq-25000-original-imafwfgg4ecgggrt.jpeg?q=70",
    title: 'Jewellery',
    offer: 'Up to 10% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/kn4xhu80/e-gift-voucher/w/l/i/open-croma-250-original-imagfvh6s4zghusx.jpeg?q=70",
    title: 'Electronics & Home',
    offer: 'Up to 10% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/kn3i1zk0/e-gift-voucher/z/s/k/open-uber-50-original-imagfv22adzypkah.jpeg?q=70",
    title: 'Travel',
    offer: 'Up to 20% off',
  },
  {
    imageSrc: "https://rukminim2.flixcart.com/image/400/400/krz97rk0/e-gift-voucher/b/c/1/restaurant-mcdonalds-2000-original-imag5njgqyfsfxu4.jpeg?q=70",
    title: 'Food & Beverages',
    offer: 'Up to 20% off',
  },

]
export const GiftCardComponent = () => {
  const navigate = useNavigate()

  return (
    <>
      <Navigation />
      <NavigationBottom />
      <div>
        <div className="_2coi">
          <div className="_1vbu">
            Digital Brand Gift Cards
          </div>
          <div className="_9rif">
            8 Items
          </div>
        </div>
        <Grid container spacing={2} >
          {GiftData.map((data, index) => (
            <Grid className="_5equ" item xs={6} sm={4} md={2} lg={3} key={index} onClick={() => navigate("/product-details")} >
              <div style={{ width: "200px", height: "200px" }}>
                <img src={data.imageSrc} alt="Image description" style={{ width: "100%", objectFit: 'cover' }} />
              </div>
              <Typography className="_9jbf" variant="h6" align="center">
                {data.title}
              </Typography>
              <Typography className="_3uhn" variant="h6" align="center">
                {data.offer}
              </Typography>
              <Typography className="_2kqf" variant="p" align="center">
                Instant Delivery
              </Typography>


            </Grid>
          ))}
        </Grid>

      </div>
    </>
  )
}
