import React from 'react';
import { Grid, Typography } from '@mui/material';
import "./css/HomeGrid.css"
import {AiOutlineRight} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const GridData = [
    {
      imageSrc: "https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/feb/0211/nord-ce-2-5g/Gray.png",
      heading: 'One plus',
      percentage: 'Up to 50 % off',
    },
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/420/420/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=60',
      heading: 'Printer',
      percentage: 'Up to 70 % off',
     
    },
    {
      imageSrc: 'http://3.bp.blogspot.com/-OipYuuNx7bc/UYznOsel-mI/AAAAAAAAA48/voQrFOp9vNI/s1600/laptop.jpg',
      heading: 'ELectronics',
      percentage: 'Up to 20 % off',
  
    },
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/420/420/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=60',
      heading: 'Cycle',
      percentage: 'Up to 60 % off',
 
    },
    {
        imageSrc: 'https://rukminim1.flixcart.com/image/420/420/xif0q/microphone/e/3/v/sm7b-studio-microphone-shure-original-imagn6myjggb2nnt.jpeg?q=60',
        heading: 'speaker',
        percentage: 'Up to 50 % off',

      },
      {
        imageSrc: 'https://images.jdmagicbox.com/quickquotes/images_main/realme-gt-2-pro-steel-black-8gb-128gb-2188142229-4q0jqnpo.jpg',
        heading: 'Iphone ',
        percentage: 'Up to 30 % off',
      },
  
  ];
  
  
const HomeGrid = () => {
    return (
        <div className="_7hac">
            <div className="_3ndr">
        <Typography variant='h5'>Mobiles & more</Typography>
        <Link to="giftcardcomp">
        <AiOutlineRight/>
        </Link>
        </div>
        <Grid container spacing={2}>
        {GridData.map((data, index) => (
            <Grid item xs={2} className="_8znn">
                <Link to="/filtercomponent">
                <div className="_6jup">
                    <img style={{ width: "120px", height: "150px" }} src={data.imageSrc} alt="Mobile" />
                    <Typography  className="heading-6jup"gutterBottom variant="h5" component="div" >
                        {data.heading}
                    </Typography>
                    <Typography className="_1fdg" variant="body2" color="green">
                       {data.percentage}
                    </Typography>
                </div>
                </Link>
            </Grid>
             ))}
        </Grid>
        </div>
    );
}

export default HomeGrid;
