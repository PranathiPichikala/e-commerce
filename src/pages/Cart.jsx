import "./css/Cart.css"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"
import EmptyCart from "../assets/Empty Cart.webp"

const Cart = () => {
    const [search, setSearch] = useState("")
    const [activemenu, setActivemenu] = useState("e-cart")

    return (
        <div className="_5pko">
            <div className="header">
                <div className="search">
                    {search ? undefined : <label>Search for products, brands and more</label>}
                    <input value={search} onChange={e => setSearch(e.target.value)} />
                    <BiSearch />
                </div>
                <button>Login</button>
            </div>
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
                        <img src={EmptyCart} alt="" />
                    </div>
                    <div className="eclair-eel">
                        <h4>Missing Cart items?</h4>
                        <span>Login to see the items you added previously</span>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
