import React from 'react';
import { Link } from 'react-router-dom';
import "./css/BecomeSeller.css";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';




const BecomeSeller = () => {

  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otpPopupOpen, setOtpPopupOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowPassword(false);
    setEmail('');
    setPassword('');
  };

  const handleContinue = () => {
    setShowPassword(true);
  };

  const handleSubmit = () => {
    setOtpPopupOpen(true);
    setOpen(false);
  };

  const handleOtpVerificationSuccess = () => {
    setOtpPopupOpen(false);

  };




  return (
    <div>
      <div className='existing-seller'>
        Existing Seller? Explore our product recommendations with Dhamaka Selection
      </div>

      <div className="_9yux row-container">
        <div className='become-seller-img'>
          <img src="https://cdn.dribbble.com/users/3512533/screenshots/14168149/media/b2ee4535ff531f487f0a179d7cf91e20.jpg?resize=400x0" alt="Seller" />
        </div>
        <div className="_5ctx">
          <div className="links-container">
            <ul className="links-list">
              <li>Sell Online</li>
              <li>Fees and Commission</li>
              <li>Grow</li>
              <li>Learn</li>
              <li>Shopsy</li>
            </ul>
          </div>
          <div className='start-selling-button'>
            <li>
              <Button onClick={handleOpen}>Login</Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
                    maxWidth: '500px',
                    bgcolor: 'white',
                    boxShadow: 24,
                  }}
                >
                  <Grid className="_2fzv">
                    <Typography variant="h5" component="h2">
                      Login
                    </Typography>
                    <CloseIcon onClick={handleClose} />
                  </Grid>
                  <Grid className="_2eby">
                    <TextField
                      label="Enter Email/Mobile Number"
                      sx={{ width: 350 }}
                      margin="normal"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {showPassword && (
                      <TextField
                        label="Enter Password"
                        type="password"
                        sx={{ width: 350 }}
                        margin="normal"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ width: 350 }}
                      size="large"
                      style={{ marginTop: '20px' }}
                      onClick={showPassword ? handleSubmit : handleContinue}
                    >
                      {showPassword ? 'Submit' : 'Continue'}
                    </Button>
                  </Grid>
                  <Grid className="_9kzg">
                    <Typography className='spann' variant="span">
                      By continuing, I agree to Flipkart’s Terms of Use & Privacy Policy
                    </Typography>
                    <Typography className='spann1' variant="div">Don’t have an account?</Typography>
                    <Button variant="outlined" color="primary" sx={{ width: 350 }}>
                      Register for New Account
                    </Button>
                  </Grid>
                </Box>
              </Modal>
              {otpPopupOpen && (
                <Modal
                  open={otpPopupOpen}
                  onClose={handleOtpVerificationSuccess}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box className="otpBox"
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '80%',
                      maxWidth: '400px',
                      bgcolor: 'white',
                    }}
                  >
                    <Grid className="_2fzv">
                      <Typography variant="h5" component="h2">
                        Login
                      </Typography>
                      <CloseIcon onClick={handleOtpVerificationSuccess} />
                    </Grid>
                    <div className='OtpField'>
                      <Typography>
                        Please enter correct OTP !
                      </Typography>
                      <TextField
                        label="Enter Email/Mobile Number"
                        sx={{ width: 350 }}
                        margin="normal"
                        variant="outlined"
                      />
                      <Button
                        variant="outlined"
                        color="primary"
                        sx={{ width: 350, paddingBottom: "10px" }}
                        onClick={handleOtpVerificationSuccess}
                      >
                        Verify OTP
                      </Button>
                      {/* <Button>Resend otp</Button> */}
                    </div>
                  </Box>
                </Modal>
              )}
            </li>
            <Link to="/start-selling">
              <li className='selling-button'>
                Start Selling
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BecomeSeller;
