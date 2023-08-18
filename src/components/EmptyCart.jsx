import { useState } from "react"
import EmptyCartImage from "../assets/Empty Cart.webp"
import { useNavigate } from "react-router-dom"

const EmptyCart = () => {
    const [activemenu, setActivemenu] = useState("e-cart")

    const navigate = useNavigate()

    return (
        <div className="cart">
            <div className="navigate">
                <div onClick={() => setActivemenu("e-cart")} className={activemenu === "e-cart" ? "active" : undefined}>
                    e-cart
                </div>
                <div onClick={() => setActivemenu("grocery")} className={activemenu === "grocery" ? "active" : undefined}>
                    Grocery
                </div>
            </div>
            <div className="container">
                <div className="matinee-were">
                    <img src={EmptyCartImage} alt="" />
                </div>
                <div className="eclair-eel">
                    <h4>Missing Cart items?</h4>
                    <span>Login to see the items you added previously</span>
                    <button onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart
