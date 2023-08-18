import React, { useState } from 'react'
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import "../components/css/LoginPage.css"
import { styled } from '@mui/material/styles';
import loginImage from "../assets/online-shop.png";
import OtpInput from 'react-otp-input';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import NavigationBottom from "./NavigationBottom";


const CenteredGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}));

let styles = {
    width: "40px",
    height: "40px",
    fontSize: "18px",
    textAlign: " center",
    border: "1px solid #ccc",
    borderRadius: " 8px",
    marginRight: "10px",
}

const OtpVerification = () => {

    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    console.log(otp)

    const handleInputChange = (inputValue, inputIndex) => {
        setOtp((prevOtp) => {
            const updatedOtp = prevOtp.split('');
            updatedOtp[inputIndex] = inputValue;
            return updatedOtp.join('');
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted OTP:', otp);
        if (otp === "123456") {
            localStorage.setItem("isloggedin", true)
            navigate("/")
        } else {
          alert("Incorrect OTP")
        }
    };
 


    return (
        <div>
            <Navigation />
            <CenteredGrid container spacing={2}>
               
                <Grid className='First_Grid' item xs={12} md={3}>
                    <Box className="First_box">
                        <Typography variant="h5">Login here!</Typography>
                        <Typography variant="body1">
                            Get access to your Orders, Wishlist and Recommendations
                        </Typography>
                    </Box>
                    <Box className='Image_box'>
                        <img
                            src={loginImage}
                            alt="Welcome"
                            style={{ width: '100px' }}
                        />
                    </Box>
                </Grid>

               
                <Grid className='Second_Grid' item xs={12} md={5}>
                    <div style={{width: "155px" ,textAlign: "center"}}>
                        <h4>Please Enter the OTP sen to Number.<span style={{color:"blue"}}>Change</span></h4>
                    </div>
                    <form onSubmit={handleSubmit} className='Form-control'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            isInputNum
                            isDisabled={otp.length === 6}
                            shouldAutoFocus
                            isInputSecure={false}
                            inputClassName="otp-field"
                            inputMode="numeric"
                            onInputChange={handleInputChange}
                            // renderSeparator={<span> - </span>}
                            renderInput={(props) => <input  {...props} style={styles} />}
                        />
                        
                        <Button className='LoginButton'
                            variant="contained"
                            color="primary"
                            type='submit'
                            sx={{ width: 450 }}
                            size="large"
                            style={{ marginTop: '20px' }}
                        >
                            Continue
                            
                        </Button>
                      
                    </form>
                    <Box>
                        <Typography>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, vero.
                        </Typography>
                    </Box>
                </Grid>
            </CenteredGrid>
        </div>
    )
}

export default OtpVerification