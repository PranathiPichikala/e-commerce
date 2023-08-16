import React, { useState, useEffect } from 'react';
import "./css/DesktopNotify.css";
import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormControl,
    Select,
    MenuItem,
    Typography,
    IconButton,
    Collapse,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const DesktopNotify = () => {
    const [myOrdersChecked, setMyOrdersChecked] = useState(false);
    const [recentOrdersChecked, setRecentOrdersChecked] = useState(false);
    const [cancelledOrdersChecked, setCancelledOrdersChecked] = useState(false);
    const [orders, setOrders] = useState([])
    const [allChecked, setAllChecked] = useState(false);
    const [nestedOpen, setNestedOpen] = useState(false);
    const handleMyOrdersChange = (event) => {
        setMyOrdersChecked(event.target.checked);
        setRecentOrdersChecked(event.target.checked);
        setCancelledOrdersChecked(event.target.checked);
        setNestedOpen(event.target.checked);
    };

    const nots = ["Recent orders", "Cancelled orders", "Test","Reminders for Items in Cart"]

    useEffect(() => {
        setOrders(nots.map(item => 0))
    }, [])

    // const handleRecentOrdersChange = (event) => {
    //     setRecentOrdersChecked(event.target.checked);
    // };

    // const handleCancelledOrdersChange = (event) => {
    //     setCancelledOrdersChecked(event.target.checked);
    // };
    // const handleNestedToggle = () => {
    //     setNestedOpen(!nestedOpen);
    // };

    // const handleAllChange = (event) => {
    //     setAllChecked(event.target.checked);
    // };
    // const anyCheckboxUnchecked =
    //     !myOrdersChecked || !recentOrdersChecked || !cancelledOrdersChecked;

    return (
        <div className="_9occ">
            <h2>Desktop Notifications</h2>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="_3mic">
                        
                        <FormControlLabel
                        label={
                            <>
                                <span>My Orders</span>
                                <Typography variant="body2" color="textSecondary">
                                    Latest updates on your orders.
                                </Typography>
                            </>
                        } 
                            control={
                                <Checkbox
                                    checked={orders.every(item => item == 1)}
                                    onChange={handleMyOrdersChange}
                                />
                            }
                            
                        />
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <Collapse in={nestedOpen}>
                        <FormGroup>
                            {nots.map((item, index) => {
                                return (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={orders[index]}
                                                onChange={() => setOrders(prev => {
                                                    const copy = [...prev]
                                                    copy[index] = !copy[index]
                                                    return copy
                                                })}
                                            />
                                        }
                                        label={item}
                                    />
                                )
                            })}

                        </FormGroup>
                    </Collapse>
                </AccordionDetails>
            </Accordion>

           
        </div>
    );
}
