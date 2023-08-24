import React, { useState } from 'react';
import { Box, Typography, LinearProgress, Modal, Grid, Button } from '@mui/material';
import "./css/RatingsAndReviews.css"
import { BiDislike, BiLike } from 'react-icons/bi';
import { ImUser } from 'react-icons/im';
import { RiArrowDropDownLine } from 'react-icons/ri';
import AddReviews from './AddReviews';

const styles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    fontSize: 16
}

const RatingsAndReviews = () => {
    const totalRatings = 530;
    const totalReviews = 509;

    const ratingsData = [
        { stars: 5, count: 250 },
        { stars: 4, count: 150 },
        { stars: 3, count: 60 },
        { stars: 2, count: 30 },
        { stars: 1, count: 10 },
    ];

    const [shownImages, setShownImages] = useState(5);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isreviwModalOpen, setIsReviewModalOpen] = useState(false);
    const [showAllOffers, setShowAllOffers] = useState(false);

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleReviewsModal = () => {
        setIsReviewModalOpen(false);
    };

    const toggleOffers = () => {
        setShowAllOffers(!showAllOffers);
    };

    const imageUrls = [
        'https://img.freepik.com/free-photo/online-shopping-fashion-concept-happy-asian-senior-woman-winning-prize-internet-holding-mobil_1258-170021.jpg?w=1060&t=st=1692774310~exp=1692774910~hmac=e8b03bbee51cfcda07fa7506e7414508ad5b8c3f0f24de008e9c6477febcbf3e',
        'https://img.freepik.com/free-photo/online-shopping-fashion-concept-happy-asian-senior-woman-winning-prize-internet-holding-mobil_1258-170021.jpg?w=1060&t=st=1692774310~exp=1692774910~hmac=e8b03bbee51cfcda07fa7506e7414508ad5b8c3f0f24de008e9c6477febcbf3e',
        'https://img.freepik.com/free-photo/online-shopping-fashion-concept-happy-asian-senior-woman-winning-prize-internet-holding-mobil_1258-170021.jpg?w=1060&t=st=1692774310~exp=1692774910~hmac=e8b03bbee51cfcda07fa7506e7414508ad5b8c3f0f24de008e9c6477febcbf3e',
        'https://img.freepik.com/free-photo/online-shopping-fashion-concept-happy-asian-senior-woman-winning-prize-internet-holding-mobil_1258-170021.jpg?w=1060&t=st=1692774310~exp=1692774910~hmac=e8b03bbee51cfcda07fa7506e7414508ad5b8c3f0f24de008e9c6477febcbf3e',
        "https://img.freepik.com/free-photo/stylish-asian-businesswoman-girl-suit-taking-selfie-smartphone-video-chat-with-mobile-phone-app-posing-against-pink-studio-background_1258-99939.jpg?w=1060&t=st=1692774428~exp=1692775028~hmac=2dff4850366b709b1fe4476361acb881af2f1c6b11b2bda926a18924a7c6170d",
        "https://img.freepik.com/free-photo/stylish-asian-businesswoman-girl-suit-taking-selfie-smartphone-video-chat-with-mobile-phone-app-posing-against-pink-studio-background_1258-99939.jpg?w=1060&t=st=1692774428~exp=1692775028~hmac=2dff4850366b709b1fe4476361acb881af2f1c6b11b2bda926a18924a7c6170d",
        "https://img.freepik.com/free-photo/stylish-asian-businesswoman-girl-suit-taking-selfie-smartphone-video-chat-with-mobile-phone-app-posing-against-pink-studio-background_1258-99939.jpg?w=1060&t=st=1692774428~exp=1692775028~hmac=2dff4850366b709b1fe4476361acb881af2f1c6b11b2bda926a18924a7c6170d",
    ];

    const handleImageClick = () => {
        if (shownImages === 5) {
            setIsModalOpen(true)
        } else {
            setShownImages(5);
        }
    };

    const handlereview = () => {
        setIsReviewModalOpen(true);
    }

    return (
        <>
            <Grid sx={{ width: "99%" }} className="_7cpg">
                <div className="_9elk">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                        <Typography className='tittlee'>
                            Ratings & Reviews
                        </Typography>
                        <Button onClick={handlereview} variant='outlined' style={{ marginRight: "30px" }}>
                            Rate Product
                        </Button>
                        <Modal open={isreviwModalOpen} onClose={handleReviewsModal}>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '80%',
                                    maxWidth: '800px',
                                    bgcolor: 'white',
                                    boxShadow: 24,
                                }}
                            >
                                <AddReviews />
                            </Box>
                        </Modal>
                    </div>
                    <Box display="flex" alignItems="center">
                        <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}>
                            <Typography variant="h5">4★</Typography>
                            <Typography>{totalRatings.toLocaleString()} Ratings</Typography>
                            <Typography>{totalReviews.toLocaleString()} Reviews</Typography>
                        </Box>
                        <Box className="_2rqp" flexGrow={1} marginLeft={2}>
                            {ratingsData.map((rating) => (
                                <Box key={rating.stars} marginBottom={1}>
                                    <Box display="flex" alignItems="center">
                                        <Typography component="span" marginRight={1}>
                                            {rating.stars}★
                                        </Typography>
                                        <LinearProgress
                                            sx={{
                                                flexGrow: 1, height: 10,
                                                backgroundColor: '#f0f0f0',
                                                '& .MuiLinearProgress-bar': {
                                                    backgroundColor: '#388e3c'
                                                }
                                            }}
                                            variant="determinate"
                                            value={(rating.count / totalRatings) * 100}
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box display="flex" flexWrap="nowrap">
                        {imageUrls.slice(0, shownImages).map((imageUrl, index) => (
                            <Box
                                key={index}
                                width="20%"
                                padding={1}
                                style={{ position: 'relative' }}
                                onClick={index === 4 ? handleImageClick : undefined}
                            >
                                {index === 4 && shownImages === 5 && (
                                    <Box style={styles}>
                                        +{imageUrls.length - shownImages} More
                                    </Box>
                                )}
                                <img src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '100%' }} />
                            </Box>
                        ))}
                    </Box>
                    <Modal open={isModalOpen} onClose={handleModalClose}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '80%',
                                maxWidth: '800px',
                                bgcolor: 'white',
                                boxShadow: 24,
                                p: 2,
                                overflow: "scroll"
                            }}
                        >
                            <Box display="flex" flexWrap="wrap">
                                {imageUrls.map((imageUrl, index) => (
                                    <Box key={index} width="25%" padding={1}>
                                        <img src={imageUrl} alt={`Image ${index + 1}`} style={{ maxWidth: '100%' }} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Modal>
                </div>
                <Box className="_6slx">
                    <div className='reviews'>
                        <Typography variant='h5' className="rating">4★</Typography>
                        <Typography variant='h5' className="comment">Nice product</Typography>
                    </div>
                    <Typography className='description' variant='h6'>
                        I am writing this after using 3 days of my experience.. sound quality is very good and bass is awesome 👍 calling sound quality is fully clear . Built quality is also good . It's looking too nice . According to the price boult provides very good features.I just love this buds
                    </Typography>
                    <div className='images_div'>
                        <img src={imageUrls} alt='images' style={{ width: "100px", marginRight: "10px" }} />
                        <img src={imageUrls} alt='images' style={{ width: "100px", marginRight: "10px" }} />
                    </div>
                    <div className="_3fux">
                        <div className="xonight">
                            <div className="Flipkart-Seller">
                                <ImUser /> Flipkart user or user name
                            </div>
                        </div>
                        <div className="likes-dislike">
                            <div className="like">
                                <BiLike /> 683</div>
                            <div className="dislike"> <BiDislike />292</div>
                            <div className="riarrowdrop"><RiArrowDropDownLine /></div>
                        </div>
                    </div>
                </Box>
                {showAllOffers && (
                    <Box className="_6slx">
                        <div className='reviews'>
                            <Typography variant='h5' className="rating">4★</Typography>
                            <Typography variant='h5' className="comment">Nice product</Typography>
                        </div>
                        <Typography className='description' variant='h6'>
                            I am writing this after using 3 days of my experience.. sound quality is very good and bass is awesome 👍 calling sound quality is fully clear . Built quality is also good . It's looking too nice . According to the price boult provides very good features.I just love this buds
                        </Typography>
                        <div className='images_div'>
                            <img src={imageUrls} alt='images' style={{ width: "100px", marginRight: "10px" }} />
                            <img src={imageUrls} alt='images' style={{ width: "100px", marginRight: "10px" }} />
                        </div>
                        <div className="_3fux">
                            <div className="xonight">
                                <div className="Flipkart-Seller">
                                    <ImUser /> Flipkart user or user name
                                </div>
                            </div>
                            <div className="likes-dislike">
                                <div className="like">
                                    <BiLike /> 683</div>
                                <div className="dislike"> <BiDislike />292</div>
                                <div className="riarrowdrop"><RiArrowDropDownLine /></div>
                            </div>
                        </div>
                    </Box>
                )}
                <div className="_4dyfff">
                    <div className='show-more' onClick={toggleOffers}>
                        {showAllOffers ? "View less Reviews" : "All Reviews"}
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default RatingsAndReviews;
