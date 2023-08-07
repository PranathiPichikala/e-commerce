import Header from "../components/Header"
import SliderComp from "../components/SliderComp"

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
        </div>
    )
}

export default Home
