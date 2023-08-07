import Header from './Header/Header';
import './App.css';
import SliderComp from './Slider-component/SliderComp';

const imagesslider = [
  '/Images/slider1.jpeg',
  '/Images/slider2.jpeg',
  '/Images/slider3.jpeg',
  '/Images/slider4.jpeg',
];
function App() {
  
  return (
    <>
    <Header/>
    <div className="slider-container">
      <SliderComp imagesslider={imagesslider} />
    </div>
    </>
  );
}

export default App;
