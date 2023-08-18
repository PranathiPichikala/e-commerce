import "../components/css/LoginPage.css"
import { useState } from "react";
import { Grid, TextField, Button, Typography, Box } from '@mui/material';
import loginImage from "../assets/online-shop.png";
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const CenteredGrid = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }));

const LoginModal = ({ handleClose }) => {
    const [showSignUpPage, setShowSignUpPage] = useState(true);
    const [search, setSearch] = useState("")
  
    const handleRegisterClick = () => {
      setShowSignUpPage(true);
    };
  
    const handleSignUpPageClose = () => {
      setShowSignUpPage(false);
    };

    return (
        <div className="_2egr" onClick={() => handleClose()}>
           {!showSignUpPage ? (
        <CenteredGrid container spacing={2}>
          {/* First Grid */}
          <Grid className='First_Grid' item xs={12} md={3} onClick={e => e.stopPropagation()}>
            <Box className="First_box">
              <Typography variant="h5">Looks like you're new here!</Typography>
              <Typography variant="body1">
                Sign up with your mobile number to get started.
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

          {/* Second Grid */}
          <Grid className='Second_Grid' item xs={12} md={5} onClick={e => e.stopPropagation()}>
            <form className='Form-control'>
              <TextField
                label="Enter Email/Mobile Number"
                sx={{ width: 450 }}
                margin="normal"
                variant="outlined"
              />
                <Link  to="/otp-verif">
              <Button className='LoginButton'
                variant="contained"
                color="primary"
                sx={{ width: 450 }}
                size="large"
                style={{ marginTop: '20px' }}
              >
                Continue
              </Button>
              </Link>
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: 450 }}
                size="large"
                style={{ marginTop: '10px' }}
                onClick={() => handleRegisterClick()}
              >
                Existing User? Login
              </Button>
            </form>
            <Box>
              <Typography>
                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
              </Typography>
            </Box>
          </Grid>
        </CenteredGrid>
      ) : (
        <CenteredGrid container spacing={2}>
          {/* First Grid */}
          <Grid className='First_Grid' item xs={12} md={3} onClick={e => e.stopPropagation()}>
            <Box className="First_box">
              <Typography variant="h5">Login</Typography>
              <Typography variant="body1">
                Get access to your Orders, Wishlist and Recommendations
              </Typography>
            </Box>
            <Box className='Image_box'>
              <img
                src={loginImage}
                alt="Welcome"
                style={{ width: "100px" }}
              />
            </Box>
          </Grid>

          {/* Second Grid */}
          <Grid className='Second_Grid' item xs={12} md={5} onClick={e => e.stopPropagation()}>
            <form className='Form-control'>
              <TextField
                label="Enter Email/Mobile Number"
                sx={{ width: 450 }}
                margin="normal"
                variant="outlined"
              />
              <Link  to="/otp-verif">
              <Button className='LoginButton'
                variant="contained"
                color="primary"
                sx={{ width: 450 }}
                size="large"
                style={{ marginTop: '20px' }}
              >
                Continue
              </Button>
              </Link>
              <Button
                variant="outlined"
                color="primary"
                sx={{ width: 450 }}
                size="large"
                style={{ marginTop: '10px' }}
                onClick={() => handleSignUpPageClose()}
              >
                New to Flipkart? Create an account
              </Button>
            </form>
            <Box>
              <Typography>
                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
              </Typography>
            </Box>
          </Grid>
        </CenteredGrid>
      )}
        </div>
    )
}

export default LoginModal
