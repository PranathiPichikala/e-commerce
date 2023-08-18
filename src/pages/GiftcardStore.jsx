import { Link, useNavigate } from "react-router-dom"
import Navigation from "../components/Navigation"
import NavigationBottom from "../components/NavigationBottom"
import "./css/GiftcardStore.css"
import Footer from "./Footer"

const GiftcardStore = () => {
    const navigate = useNavigate()
    
    return (
        <div className="_7ifw">
            <Navigation />
            <NavigationBottom />
            <div className="groveled-toke">
                <div className="header">
                    <h4>Gift Card Store</h4>
                    <span>Special occasions call for special gifts. Whether it’s a birthday or an anniversary, finding the right gift for your loved ones is always a difficult task. And after you get a gift, you have to hope that they like what you got. Well, there’s a simple solution to this conundrum - Gift Cards Store.</span>
                </div>
                <div className="container">
                    <div className="background">
                        <div className="armagnac-asp">
                            Digital Brand Gift Cards
                         <Link to="/giftcardcomp"> <button>View all</button></Link>  
                        </div>
                        <div className="reacher-gyps">
                            <div className="card" onClick={() => navigate("/product-details")}>
                                <img src="https://rukminim2.flixcart.com/image/150/150/kn4xhu80/e-gift-voucher/w/l/i/open-croma-250-original-imagfvh6s4zghusx.jpeg?q=70" alt="" />
                                <div className="title">Electronics & Home</div>
                                <div className="discount">Up to 10% off</div>
                                <div className="description">Instant delivery</div>
                            </div>
                            <div className="card" onClick={() => navigate("/product-details")}>
                                <img src="https://rukminim2.flixcart.com/image/150/150/kn4xhu80/e-gift-voucher/w/l/i/open-croma-250-original-imagfvh6s4zghusx.jpeg?q=70" alt="" />
                                <div className="title">Electronics & Home</div>
                                <div className="discount">Up to 10% off</div>
                                <div className="description">Instant delivery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default GiftcardStore
