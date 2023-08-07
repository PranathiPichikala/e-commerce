import "./css/Cart.css"
import { BiSearch } from "react-icons/bi"
import { useState } from "react"

const Cart = () => {
    const [search, setSearch] = useState("")

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
                    <div>
                        e-cart
                    </div>
                    <div>
                        Grocery
                    </div>
                </div>
                <div className="container">

                </div>
            </div>
        </div>
    )
}

export default Cart
