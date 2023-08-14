import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, TextField, Button, FormControl, Select, InputLabel, MenuItem, RadioGroup, FormControlLabel, Radio, Modal, Box } from '@mui/material';
import "./css/AddGiftCard.css"
import { AiOutlinePlus } from 'react-icons/ai';
import GiftCardForm from './GiftCardForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};

const AddGiftCard = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [giftopen, setGiftOpen] = React.useState(false);
    const handleGiftOpen = () => setGiftOpen(true);
    const handleGiftClose = () => setGiftOpen(false);


    return (
        <Container className="_3set">
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent className="_3oib">
                    <Grid className="_4vqa">
                        <Typography className="_2ben" variant="h5" gutterBottom>
                            Flipkart Gift Card
                        </Typography>
                        <List className="_3wts">
                            <ListItem>Buy a Gift Card</ListItem>
                            <ListItem onClick={handleGiftOpen}>Check Gift Card Balance</ListItem>
                            <Modal
                                open={giftopen}
                                onClose={handleGiftClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Check Gift Card Balance
                                    </Typography>
                                    <TextField
                                        label="Gifer,s Name"
                                        fullWidth
                                        // value={pincode}
                                        // onChange={(e) => setPincode(e.target.value)}
                                        margin="normal"
                                    />
                                    <TextField
                                        label="Write a message"
                                        fullWidth
                                        // value={locality}
                                        // onChange={(e) => setLocality(e.target.value)}
                                        margin="normal"
                                    />
                                    <Button>CHECK GIFT CARD BALANCE</Button>
                                </Box>
                            </Modal>
                        </List>
                    </Grid>
                    <Grid className="_1zfw">
                        <Button onClick={handleOpen} className="_8fyb" variant="h6" >
                            <AiOutlinePlus className="_1xur" /> ADD A GIFT CARD
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Add Gift Card
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Gift Card number & PIN are sent to your email inbox
                                </Typography>
                                <TextField
                                    label="Gifer,s Name"
                                    fullWidth
                                    // value={pincode}
                                    // onChange={(e) => setPincode(e.target.value)}
                                    margin="normal"
                                />
                                <TextField
                                    label="Write a message"
                                    fullWidth
                                    // value={locality}
                                    // onChange={(e) => setLocality(e.target.value)}
                                    margin="normal"
                                />
                                <Button> ADD GIFT CARD</Button>
                            </Box>
                        </Modal>
                    </Grid>
                    <Grid className="_5dgm">
                        <Typography className="_1ewe" variant="h5">
                            Buy a Flipkart Gift Card
                        </Typography>
                    </Grid>
                    <Grid>
                        <GiftCardForm />
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default AddGiftCard;