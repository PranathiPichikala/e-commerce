import React, { useState } from "react";
import { TextField, Tabs, Tab } from "@mui/material";
import "./css/OnboardingDashboard.css"
import { AiOutlineMobile } from "react-icons/ai"
import { LuMailOpen } from "react-icons/lu";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import 'react-datepicker/dist/react-datepicker.css';

export const OnboardingDashboard = () => {
    const [tabValue, setTabValue] = useState(0);
    const [gstin, setGstin] = useState("");
    const [pan, setPan] = useState("");
    const [mobile, setMobile] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [pin,setPin] = useState("")
    const [showCallbackForm, setShowCallbackForm] = useState(false);

    const handleCallbackRequest = () => {
        setShowCallbackForm(true);
    };

    const handleCloseCallbackForm = () => {
        setShowCallbackForm(false);
    };
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };
    return (
        <div>
            <div className="_6ecl">
                <div className="onboarding-comp">
                    <div className="_0gjg">
                        <div className='head'>
                            <h5>your Onboarding Completion Status</h5>
                            <div className='percentage'>
                                <p>20%</p>
                                <div className="percenatge-line">
                                    <div className='percenatge-line-contnet'></div>
                                </div>
                            </div>
                        </div>
                        <div className='align-oosc'>
                            <ul className="_0osc" >
                                <p>Mobile &amp; Email Verification</p>
                                <ul>
                                    <li>Mobile Verification</li>
                                    <li>Email Verification</li>
                                </ul>
                                <p>ID &amp; Signature Verification</p>
                                <ul>
                                    <li>ID Verification</li>
                                    <li>Signature Verification</li>
                                </ul>
                                <p>Store &amp; Pickup Details</p>
                                <ul>
                                    <li>Display Name</li>
                                    <li>Pickup Address</li>
                                </ul>
                                <p>Listing &amp; Stock Availability</p>
                                <ul>
                                    <li>Listing Created</li>
                                    <li>Stock Added</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*  */}

                <div className="_5ybi">
                    <div>
                        <h3>Hello, Pranathi Pichikala</h3>
                        <h5>Mobile & Email Verification</h5>
                        <div className='mobile-5ybi'>
                            <div className="mobile-line">
                                <div className='mobilenumber-verify'>
                                    <AiOutlineMobile />
                                    <p >+918639616575</p>
                                </div>
                                <div className='verified' >Verified</div>
                            </div>
                            <div className="mobile-line">
                                <div className='mobilenumber-verify'>
                                    <LuMailOpen />
                                    <p >pranathi310800@gmail.com</p>
                                </div>
                                <button className='resend' >Resend Email</button>
                            </div>
                        </div>
                        <div className="id-signature">
                            <h5>ID & Signature Verification</h5>
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
                                       className="pickup-name"
                                        label="Enter PAN Number"
                                        value={pan}
                                        onChange={(e) => setPan(e.target.value)}
                                        fullWidth
                                    />
                                    <p>
                                        PAN & Business Details are required to sell books on Flipkart.
                                    </p>

                                    <TextField
                                        className="pickup-name"
                                        label="Enter Your Full Name"
                                        value={name}

                                        fullWidth
                                    />
                                    <textarea className="pickup-description" placeholder="Enter store description"></textarea>
                                    <TextField
                                        className="pickup-name"
                                        label="Enter Pickup Pincode"
                                        value={pin}
                                        onChange={(e) => setPin(e.target.value)}
                                        fullWidth
                                    />
                                    <div className="city-state">
                                        <TextField  className="city"label="Text Field 1" variant="outlined" />
                                        <TextField className="state" label="Text Field 2" variant="outlined" />
                                    </div>
                                    <button className="password-save">Save</button>
                                </div>
                            )}

                        </div>
                        <div>
                            <h5>Store & Pickup Details</h5>
                            <TextField
                                className="pickup-name"
                                label="Enter Your Full Name"
                                value={name}

                                fullWidth
                            />
                            <TextField
                                className="pickup-display"
                                label="Enter Display Name"
                                value={name}

                                fullWidth
                            />
                            <textarea className="pickup-description" placeholder="Enter store description"></textarea>
                        </div>
                        <div>
                            <h5>Pickup Pincode</h5>
                            <TextField
                                className="pickup-name"
                                label="Enter Pickup Pincode"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                fullWidth
                            />


                            <h5>Pickup Address (Minimum 8 letters)</h5>
                            <TextField
                                           className="pickup-name"
                                        label="Shop No., Building Name, Floor"
                                        value={pan}
                                        onChange={(e) => setPan(e.target.value)}
                                        fullWidth
                                    />
                                   

                                    <TextField
                                        className="pickup-name"
                                        label="Road Name, Area, Colon"
                                        value={name}

                                        fullWidth
                                    />
                        
                                    <TextField
                                        className="pickup-name"
                                        label="Nearby Landmark"
                                        value={name}

                                        fullWidth
                                    />
                                    <div className="city-state">
                                        <TextField  className="city"label="Text Field 1" variant="outlined" />
                                        <TextField className="state" label="Text Field 2" variant="outlined" />
                                    </div>








                        </div>
                        <button className="password-save">Save</button>
                    </div>

                </div>





                {/*  */}

                <div className="_7ogo">
                    {showCallbackForm ? (
                        <div className="callback-form-content">
                            <div className="callback-header">
                                <h5>Do you need help?</h5>
                                <button className="close-button" onClick={handleCloseCallbackForm}>
                                    ✖
                                </button>
                            </div>
                            <p>Please choose your preferred time slot so that our experts can reach out to you at your convenience.</p>
                            <div className="date-picker">
                                <input type="date" id="myDate" name="myDate" />



                            </div>
                            <div className="time-slot">
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Choose Time Slot</InputLabel>
                                    <Select
                                        className="choose-slot"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={time}
                                        label="Choose Time Slot"
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        <MenuItem value={10}>10 AM to 11 AM</MenuItem>
                                        <MenuItem value={20}>11 AM to 12 AM</MenuItem>
                                        <MenuItem value={30}>12 AM to 1 pM</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mobile-number">
                                <TextField
                                    label="Enter Mobile Number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    fullWidth
                                />
                            </div>
                            <textarea className="additional" placeholder="Explain your Concern"></textarea>
                            <button className="request-callback">Request a Callback</button>
                        </div>
                    ) : (
                        <div className="need-help-content">
                            <h5>Do you need help?</h5>
                            <div>
                                <p>Our team of specialists would be happy to help you set up your shop on Flipkart.</p>
                                <p>If you would like their assistance,</p>
                                <button className="request-callback" onClick={handleCallbackRequest}>Request a Callback</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
