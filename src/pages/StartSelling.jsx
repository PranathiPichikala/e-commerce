import React, { useState } from "react";
import { Stepper, Step, StepLabel, TextField, Tabs, Tab, Typography, Grid } from "@mui/material";
import "./css/StartSelling.css";
import { OnboardingDashboard } from "../components/OnboardingDashboard";

const StartSelling = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [mobileNumber, setMobileNumber] = useState("");
  const [sendOtpText, setSendOtpText] = useState("Send OTP");
  const [showOtpFields, setShowOtpFields] = useState(false);
  const [otpFields, setOtpFields] = useState(Array(6).fill(""));
  const [email, setEmail] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [gstin, setGstin] = useState("");
  const [pan, setPan] = useState("");
  const [skipped, setSkipped] = React.useState(new Set());

  const handleMobileNumberChange = (event) => {
    const { value } = event.target;
    setMobileNumber(value);
    setSendOtpText(value.length === 10 ? "Send OTP" : "Send OTP");
    setShowOtpFields(false);
  };

  const handleSendOtp = () => {
    setSendOtpText("Sending OTP...");
    setTimeout(() => {
      setSendOtpText("Send OTP");
      setShowOtpFields(true);
    }, 2000);
  };

  const handleOtpFieldChange = (index, value) => {
    const newOtpFields = [...otpFields];
    newOtpFields[index] = value;
    setOtpFields(newOtpFields);
    if (value && index < otpFields.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleNext = () => {
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const isBackDisabled = activeStep === 0;

  const steps = ["EMAIL ID & GST", "PASSWORD CREATION", "ONBOARDING DASHBOARD"];

  return (
    <div className="_2ydi">
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="step-content">
        {activeStep === 0 && (
          <div className="step">
            <TextField
              className="mobile-number-step"
              label="Enter Mobile Number"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <button
                    className="send-otp-button"
                    onClick={handleSendOtp}
                    disabled={mobileNumber.length !== 10}
                  >
                    {sendOtpText}
                  </button>
                ),
              }}
            />
            {showOtpFields && (
              <>
                <p>* Enter OTP sent to your mobile number</p>
                <div className="otp-fields">
                  {otpFields.map((value, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={value}
                      onChange={(e) =>
                        handleOtpFieldChange(index, e.target.value)
                      }
                    />
                  ))}
                </div>
              </>
            )}
            <p className="">
              Didn’t receive OTP?
              <button data-testid="button" classNme="" type="button">
                Resend OTP
              </button>
            </p>
            <TextField
              label="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <h4>What are you looking to sell on Flipkart?</h4>
            <Tabs
              className="categories-books"
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
            >
              <Tab label="All Categories" />
              <Tab label="Only Books" />
            </Tabs>
            {tabValue === 0 ? (
              <div>
                <TextField
                  className="gstin-number"
                  label="Enter GSTIN Number"
                  value={gstin}
                  onChange={(e) => setGstin(e.target.value)}
                  fullWidth
                />

                <p>
                  GSTIN is required to sell products on Flipkart. You can also
                  share it in the final step.
                </p>
              </div>
            ) : (
              <div>
                <TextField
                  label="Enter PAN Number"
                  value={pan}
                  onChange={(e) => setPan(e.target.value)}
                  fullWidth
                />
                <p>
                  PAN is required to sell books on Flipkart. You can also share
                  it in the final step.
                </p>
              </div>
            )}
            <p>
              By continuing, I agree to Flipkart’s Terms of Use & Privacy Policy
            </p>

          </div>
        )}

        {activeStep === 1 && (
          <div className="Rajesh_alachandra">
            <Grid className="_8biz">
              <Typography className="hello" variant="div">
                We have send a verification to your Mail
              </Typography>
              <Typography className="hello" variant="div">
                There are many variations of passages of Lorem Ipsum available
              </Typography>
              <Typography className="hello" variant="div">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </Typography>
            </Grid>
            <Grid className="_1olp">
              <TextField
                label="Enter password"
                sx={{ width: 350 }}
                margin="normal"
                variant="outlined"
              />
              <Typography style={{ color: "#0166cd" }}>
                Suggested password
              </Typography>
              <TextField
                label="Enter Full Name "
                sx={{ width: 350 }}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Enter Display Name "
                sx={{ width: 350 }}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </div>
        )}

        {activeStep === 2 && (
          <div>
            <OnboardingDashboard />
          </div>
        )}

      </div>
      <div className="registerback">
        <button onClick={handleNext}>Register and continue</button>
        <button
          disabled={isBackDisabled}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default StartSelling;
