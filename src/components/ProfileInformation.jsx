import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    TextField,
    Button,
} from '@mui/material';

const ProfileInformation = () => {
    const [editModes, setEditModes] = useState({
        personalInfo: false,
        gender: false,
        email: false,
        mobile: false,
    });

    const [selectedBox, setSelectedBox] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [selectedGender, setSelectedGender] = useState('');

    const handleBoxChange = (event) => {
        setSelectedBox(event.target.value);
    };
    const handleEditClick = (section) => {
        setEditModes((prevEditModes) => ({
            ...prevEditModes,
            [section]: !prevEditModes[section],
        }));
    };

    const handleSaveClick = (section) => {
        setEditModes((prevEditModes) => ({
            ...prevEditModes,
            [section]: false,
        }));
    };

    return (
        <Container className="_8ewn" maxWidth="sm">
            <Box mt={3}>
                <Typography className="_7rmp" variant="h5">Personal Information
                    <Button className="_7hbl" variant="outlined" onClick={() => handleEditClick('personalInfo')}>
                        {editModes.personalInfo ? 'Cancel' : 'Edit'}
                    </Button>
                </Typography>
                <Box>
                    <TextField
                        id="firstname"
                        label="Firstname"
                        variant="filled"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        disabled={!editModes.personalInfo}
                        className="_7xte"
                    />
                    <TextField
                        id="lastname"
                        label="Lastname"
                        variant="filled"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        disabled={!editModes.personalInfo}
                    />
                    {editModes.personalInfo && (
                        <Button variant="contained" onClick={() => handleSaveClick('personalInfo')} className="_4eys">
                            Save
                        </Button>
                    )}
                </Box>
            </Box>
            <Box mt={3}>
                <Typography variant="h6">Your Gender
                    <Button className="_7hbl " variant="outlined" onClick={() => handleEditClick('gender')}>
                        {editModes.gender ? 'Cancel' : 'Edit'}
                    </Button>
                </Typography>
                <div className="_5wcd">
                    <FormControl component="fieldset">
                        <RadioGroup row>
                            <FormControlLabel
                                value="male"
                                control={
                                    <Radio
                                        disabled={!editModes.gender}
                                        checked={selectedGender === 'male'}
                                        onChange={() => setSelectedGender('male')}
                                    />
                                }
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={
                                    <Radio
                                        disabled={!editModes.gender}
                                        checked={selectedGender === 'female'}
                                        onChange={() => setSelectedGender('female')}
                                    />
                                }
                                label="Female"
                            />
                        </RadioGroup>
                    </FormControl>
                    {editModes.gender && (
                        <Button variant="contained" onClick={() => handleSaveClick('gender')}>
                            Save
                        </Button>
                    )}
                </div>
            </Box>
            <Box mt={3}>
                <Typography className="_7rmp" variant="p">Email Address
                    <Button className="_7hbl" variant="outlined" onClick={() => handleEditClick('email')}>
                        {editModes.email ? 'Cancel' : 'Edit'}
                    </Button>
                </Typography>
                <div className="_5wcd">
                    <Box>
                        <TextField
                            id="email"
                            label="Email"
                            variant="filled"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={!editModes.email}
                            className="_7xte  _1yce"
                        />

                        {editModes.email && (
                            <Button variant="contained" onClick={() => handleSaveClick('email')} className="_4eys">
                                Save
                            </Button>
                        )}

                    </Box>
                </div>
            </Box>
            <Box mt={3}>
                <Typography className="_7rmp" variant="p">Mobile Number
                    <Button className="_7hbl" variant="outlined" onClick={() => handleEditClick('mobile')}>
                        {editModes.mobile ? 'Cancel' : 'Edit'}
                    </Button>
                </Typography>
                <div className="_5wcd">
                    <Box>
                        <TextField
                            id="mobile"
                            label="Mobile"
                            variant="filled"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            disabled={!editModes.mobile}
                            className="_7xte _1yce"
                        />

                        {editModes.mobile && (
                            <Button variant="contained" onClick={() => handleSaveClick('mobile')} className="_4eys">
                                Save
                            </Button>
                        )}
                    </Box>
                </div>
            </Box>
            <Box mt={3}>
                <Typography variant="h5">FAQ's</Typography>
                <Typography variant='h6'>
                    What happens when I update my email address (or mobile number)?
                </Typography>
                <Typography variant="p">
                    Your login email id (or mobile number) changes, likewise. You'll receive all your
                    account related communication on your updated email address (or mobile number).
                </Typography>
                <Typography variant='h6'>
                    What happens when I update my email address (or mobile number)?
                </Typography>
                <Typography variant="p">
                    Your login email id (or mobile number) changes, likewise. You'll receive all your
                    account related communication on your updated email address (or mobile number).
                </Typography>
                <Typography variant='h6'>
                    What happens when I update my email address (or mobile number)?
                </Typography>
                <Typography variant="p">
                    Your login email id (or mobile number) changes, likewise. You'll receive all your
                    account related communication on your updated email address (or mobile number).
                </Typography>
                <Typography variant='h6'>
                    What happens when I update my email address (or mobile number)?
                </Typography>
                <Typography variant="p">
                    Your login email id (or mobile number) changes, likewise. You'll receive all your
                    account related communication on your updated email address (or mobile number).
                </Typography>
                <div style={{ marginTop: "20px" }}>
                    <Button>
                        Deactivate Account
                    </Button>
                </div>
            </Box>
        </Container>
    );
};

export default ProfileInformation;
