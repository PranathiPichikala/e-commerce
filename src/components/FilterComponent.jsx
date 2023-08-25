import "./css/Filter.css";
import { Grid, Tabs, Tab } from "@mui/material";
import data from "./Data"
import Navigation from "./Navigation";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import NavigationBottom from "./NavigationBottom";
import { Link, useNavigate } from "react-router-dom";

export const FilterComponent = () => {
	const [selectedTab, setSelectedTab] = useState(0)

	const phones = Object.keys(data[0].SmartPhones)

	const combinedprodlist = []

	phones.map(item => {
		combinedprodlist.push(...data[0].SmartPhones[item])
	})

	const handleTabChange = (event, newValue) => {
		setSelectedTab(newValue)
	}

	// Handle pagination
	const itemsPerPage = 10
	const items = combinedprodlist
	const [itemOffset, setItemOffset] = useState(0)

	const endOffset = itemOffset + itemsPerPage

	const currentItems = items.slice(itemOffset, endOffset)
	const pageCount = Math.ceil(items.length / itemsPerPage)

	// Invoke when user click to request another page (pagination)
	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % items.length
		setItemOffset(newOffset)
	}

	const navigate = useNavigate()

	return (
		<div className="_9rwr bg-whole">
			<Navigation />
			<NavigationBottom />
			<div className="totalgrid">
				<div className="_2atk">
					<div className="bullion-fuki">
						<div className="header">
							<h4>Filters</h4>
						</div>
						<div className="container">
							Test
						</div>
					</div>
				</div>
				<div className="right-grid" item lg={9}>
					<div className="tabs-container">
						<Tabs
							value={selectedTab}
							onChange={handleTabChange}
							indicatorColor="primary"
							textColor="primary"
						>
							<Tab label="Popularity" />
							<Tab label="Price -- Low to High" />
							<Tab label="Price -- High to Low" />
							<Tab label="Newest First" />
						</Tabs>
						{selectedTab === 0 && combinedprodlist ?
							currentItems.map((item, index) => {
								console.log({ item })
								return (
								
									<div key={index}>
										<Grid container rowSpacing={2} columnSpacing={2} onClick={() => navigate("/product-details")}>
											<Grid item lg={3}>
											<Link to="/product-details">
												<div className="product-image">
													<img src={item.images} alt="Product" />
												</div>
												</Link>
											</Grid>
											<Grid item lg={5}>
												<div className="product-details">
													<h3>{item.title}</h3>
													<p><span>4.3★</span> 1,63,953 Ratings & 9,375 Reviews</p>

													<li>4 GB RAM | 64 GB ROM | Expandable Upto 1 TB</li>
													<li>16.76 cm (6.6 inch) Full HD+ Display</li>
													<li>50MP + 5MP + 2MP | 8MP Front Camera</li>
													<li>6000 mAh Lithium Ion Battery</li>
													<li>Exynos 850 Processor</li>
													<li>1 Year Warranty Provided By the Manufacturer from Date of Purchase</li>
												</div>
											</Grid>
											<Grid item lg={4}>
												<div className="product-price">
													<p>₹{(item.price - (item.price * item.discountPercentage * 0.01)).toFixed(2)}</p>
													<p>₹{item.price} <span>23% off</span></p>
													<p>Free delivery</p>
													<p>Save extra with combo offers</p>
													<p>Bank Offer</p>
												</div>
											</Grid>
										</Grid>
									</div>
								)
							}) : undefined}
						<div className="refect-din">
							<ReactPaginate
								breakLabel="..."
								nextLabel=">"
								onPageChange={handlePageClick}
								pageRangeDisplayed={5}
								pageCount={pageCount}
								previousLabel="<"
								renderOnZeroPageCount={null}
							/>
						</div>
						{selectedTab === 1 && <div>Tab 2 Content</div>}
						{selectedTab === 2 && <div>Tab 3 Content</div>}
					</div>
				</div>
			</div>
		</div>
	);
};
