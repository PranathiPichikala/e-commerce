import React, { useState } from 'react';
import { TextField, Button, Grid, MenuItem, Select, InputLabel, FormControl, Typography } from '@mui/material';
import "./css/AddGiftCard.css"

const GiftCardForm = () => {
    const [cardCount, setCardCount] = useState(1);

    const handleAddCard = () => {
        setCardCount(cardCount + 1);
    };

    const handleRemoveCard = () => {
        if (cardCount > 1) {
            setCardCount(cardCount - 1);
        }
    };

    const renderCardForm = () => {
        const cardForms = [];
        for (let i = 0; i < cardCount; i++) {
            cardForms.push(
                <Grid className="_8vgb" container spacing={2} key={i}>
                    <Grid className="_5juy" xs={6}>
                        <Grid className="_5wux" item xs={6} sm={12}>
                            <TextField
                                label="Reciver's Email Id"
                                fullWidth
                                required
                                // value={name}
                                // onChange={(e) => setName(e.target.value)}
                                margin="normal"
                            />
                            <TextField
                                label="Reciver's Name"
                                fullWidth
                                required
                                // value={number}
                                // onChange={(e) => setNumber(e.target.value)}
                                margin="normal"
                            />
                            <Grid className="_0atq" spacing={2} >
                                <Grid className="_6lli" item xs={8}>
                                    <FormControl fullWidth>
                                        <InputLabel>Card Value in ₹</InputLabel>
                                        <Select
                                        // value={country}
                                        // onChange={(e) => setCountry(e.target.value)}
                                        >
                                            <MenuItem value="1">100</MenuItem>
                                            <MenuItem value="2">1000</MenuItem>
                                            <MenuItem value="3">2000</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        label="No of Cards"
                                        fullWidth
                                        required
                                        // value={number}
                                        // onChange={(e) => setNumber(e.target.value)}
                                        margin="normal"
                                    />
                                </Grid>
                            </Grid>
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
                                multiline
                                rows={2}
                                // value={locality}
                                // onChange={(e) => setLocality(e.target.value)}
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    <Grid className="_1lvk" item xs={6}>
                        <Grid className="_4hch">
                            <Typography>Card</Typography>
                        </Grid>
                    </Grid>
                    {i > 0 && (
                        <Grid item xs={6}>
                            <Button onClick={handleRemoveCard}>
                                Remove Card
                            </Button>
                        </Grid>
                    )}
                </Grid>
            );
        }
        return cardForms;
    };

    return (
        <div>
            {renderCardForm()}
            <Button className="_0zht" onClick={handleAddCard}>
                Add Another Card
            </Button>
        </div>
    );
};

export default GiftCardForm;
