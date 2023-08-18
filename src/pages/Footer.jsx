import React from 'react';
import { Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./css/Footer.css"

const footerStyles = {
    root: {
        backgroundColor: 'black',
        color: '#ffffff',
        padding: '24px 0',
    },
    footerLink: {
        color: '#ffffff',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    socialIcon: {
        marginRight: '8px',
        color: "white"
    },
};

const Footer = () => {
    return (
        <footer style={footerStyles.root}>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid className="_6yvj" item xs={6}>
                        <Grid className="_8he" item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom>
                                About
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    About Us
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Contact Us
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Careeres
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Press
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Corporate Information
                                </a>
                            </Typography>
                        </Grid>
                        <Grid className="_8he" item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom>
                                Help
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    FAQ
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Payments
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Shipping
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Returns & Refunds
                                </a>
                            </Typography>
                        </Grid>
                        <Grid className="_8he" item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom>
                                Policies
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Security
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Privacy
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Cancellation & Refunds
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#" style={footerStyles.footerLink}>
                                    Terms Of use
                                </a>
                            </Typography>
                        </Grid>
                        <Grid className="_8he" item xs={12} sm={3}>
                            <Typography variant="h6" gutterBottom>
                                Follow Us
                            </Typography>
                            <Typography className="_1syw" variant='div'>
                                <IconButton style={footerStyles.socialIcon}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton style={footerStyles.socialIcon}>
                                    <TwitterIcon />
                                </IconButton>
                                <IconButton style={footerStyles.socialIcon}>
                                    <InstagramIcon />
                                </IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid className="_6yvj" item xs={6}>
                        <Grid className="_4caa" item xs={6} sm={6}>
                            <Typography variant="h6" gutterBottom>
                                Mail Us :-
                            </Typography>
                            <Typography>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </p>
                            </Typography>
                        </Grid>
                        <Grid className="_4caa" item xs={6} sm={6}>
                            <Typography variant="h6" gutterBottom>
                                Registered office address :-
                            </Typography>
                            <Typography>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </p>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Typography className="_5vkm" variant="body2" style={footerStyles.copyright}>
                © {new Date().getFullYear()} Vibho Tech. All rights reserved.
            </Typography>
        </footer>
    );
};

export default Footer;
