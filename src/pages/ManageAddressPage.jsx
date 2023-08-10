import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, List, ListItem, ListItemText, TextField, Button, FormControl, Select, InputLabel, MenuItem, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import "../pages/css/ManageAddress.css"

const ManageAddressesPage = () => {
    const [addresses, setAddresses] = useState([]);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [pincode, setPincode] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('')
    const [landmark, setLandmark] = useState('')
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [alternate, setAlternate] = useState("")
    const [addressMethod, setAddressMethod] = useState('')
    const [showForm, setShowForm] = useState(false);


    console.log(address)

    const handleAddAddress = () => {
        if (name && address) {
            setAddresses([...addresses, { name, address, country }]);
            setName('');
            setAddress('');
            setCountry('');
            setShowForm(false);
        }
    };

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    return (
        <Container className="_9tpk">
            <Card variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Grid>
                        <Typography className="_7mzz" variant="h5" gutterBottom>
                            Manage Addresses
                        </Typography>
                    </Grid>
                    <Grid className="_0mrg" item xs={12} md={6}>
                        {showForm ? (
                            <>
                                <Typography className="_4jki" variant="h6" gutterBottom>
                                    ADD A NEW ADDRESS
                                </Typography>
                                <form className='form_control' onSubmit={(e) => {
                                    e.preventDefault();
                                    handleAddAddress();
                                }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="First Name"
                                                fullWidth
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="10-digit Mobile number"
                                                fullWidth
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Pincode"
                                                fullWidth
                                                value={pincode}
                                                onChange={(e) => setPincode(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Locality"
                                                fullWidth
                                                value={locality}
                                                onChange={(e) => setLocality(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Address(Area and Street)"
                                                fullWidth
                                                multiline
                                                rows={4}
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="City/District/Town"
                                                fullWidth
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                                            <FormControl fullWidth>
                                                <InputLabel>State</InputLabel>
                                                <Select
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                >
                                                    <MenuItem value="AP">AndhraPradesh</MenuItem>
                                                    <MenuItem value="TS">Telangana</MenuItem>
                                                    <MenuItem value="KA">Karala</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Landmark"
                                                fullWidth
                                                value={landmark}
                                                onChange={(e) => setLandmark(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                label="Alternate Phone"
                                                fullWidth
                                                value={alternate}
                                                onChange={(e) => setAlternate(e.target.value)}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2}>
                                        <Grid style={{ marginTop: "20px" }} item xs={12}>
                                            <Typography>Address Type</Typography>
                                            <RadioGroup value={addressMethod} onChange={(e) => setAddressMethod(e.target.value)} className="_4jpo">
                                                <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                                <FormControlLabel value="Work" control={<Radio />} label="Work" />
                                            </RadioGroup>
                                        </Grid>
                                    </Grid>
                                    <Button className="_6gpx" type="submit" variant="contained" color="primary">
                                        Save Address
                                    </Button>
                                    <Button className="_6gpx" onClick={handleCancel}>Cancel</Button>
                                </form>
                            </>
                        ) : (
                            <Button className="_7gpx" onClick={handleToggleForm}>Add Address</Button>
                        )}
                    </Grid>

                    <Grid className="_0dhm" item xs={12} md={6}>
                        <List>
                            {addresses.map((address, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={address.name} secondary={address.address} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default ManageAddressesPage;
