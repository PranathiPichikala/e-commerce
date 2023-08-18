import "./css/NavigationBottom.css"
import { RiArrowDropDownLine } from "react-icons/ri"
import { Link } from "react-router-dom"
const NavigationBottom = () => {
	return (
		<div className="_0ugg">
			<div className="headfilter _1uac">
				<div className="_5bbl">
					<Link to="/Category/electronics">
						<li>Electronics

						</li>
					</Link>
					<Link to="/Category/SmartPhones">
					<li>Mobiles</li>
					</Link>
					<Link to="/Category/electronics">
						<li>Tvs & Appliances
						</li>
					</Link>

					<Link to="/Category/Fashion">
					<li>Men
				
					</li>
					</Link>
					<Link to="/Category/Beauty">
					<li> Women

					</li>
					</Link>
					<Link to="/Category/Fashion">
					<li>Baby & Kids

					</li>
					</Link>
					<Link to="/Category/Furniture">
					<li>Home & Furniture

					</li>
					</Link>
					<Link to="/Category/Appliances">
					<li> Sports, Books & More

					</li>
					</Link>
					
					<Link to="/Category/Beauty">
					<li>Grocery</li>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NavigationBottom
