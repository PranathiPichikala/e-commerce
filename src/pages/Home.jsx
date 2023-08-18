import GridComponent from "../components/GridComponents";
import Header from "../components/Header"
import SliderComp from "../components/SliderComp"
import Footer from "./Footer";
const Home = () => {
    const imagesslider = [
        '/Images/slider1.jpeg',
        '/Images/slider2.jpeg',
        '/Images/slider3.jpeg',
        '/Images/slider4.jpeg',
    ];

    return (
        <div>
            <Header />
            <div className="slider-container">
                <SliderComp imagesslider={imagesslider} />
            </div>
            <GridComponent />
            <Footer />
        </div>
    )
}

export default Home
