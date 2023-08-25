
import "./css/OnboardingSeller.css";
import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SellerHeader from "../components/SellerHeader";
import { SellerSlider } from "../components/SellerSlider";
import SellerCategories from "../components/SellerCategories";
import { Link, Outlet } from "react-router-dom";

function OnboardingSeller() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="_4svf">
            <div className="header">Accounts</div>
            <div className="onboarding-seller">
                <div className="left-side-sidebar">
                    <Accordion className="accord">
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className="accord-summar"
                        >
                            <Typography>Customize Dashboard</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accord-details">
                            <ul className="accord-details-ul">
                                <Link to="/onboarding-seller/seller-header">
                                <li >
                                    Header
                                </li>
                                </Link>
                                <Link to="/onboarding-seller/seller-slider">
                                <li onClick={() => handleOptionSelect('slider')}>
                                    Slider
                                </li>
                                </Link>
                                <Link to="/onboarding-seller/seller-categories">
                                <li onClick={() => handleOptionSelect('categories')}>
                                    Categories
                                </li>
                                </Link>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="right-side-bar">
                <Outlet/>
                    {/* {selectedOption === 'header' && <SellerHeader/>}
                    {selectedOption === 'slider' && <SellerSlider/>}
                    {selectedOption === 'categories' && <SellerCategories/>} */}
                </div>
            </div>

        </div>
    );
}
export default OnboardingSeller;