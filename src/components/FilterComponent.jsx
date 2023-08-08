import React from "react";
import "./css/Filter.css";
import { Grid, Tabs, Tab } from "@mui/material";

export const FilterComponent = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div className="bg-whole">
      <div className="headfilter">
        <li>Electronics</li>
        <li>Tvs & Appliances</li>
        <li>Men</li>
        <li> Women</li>
        <li>Baby & Kids</li>
        <li>Home & Furniture</li>
        <li> Sports, Books & More</li>
        <li>Offer Zone</li>
        <li>Grocery</li>
      </div>
      <Grid container className="totalgrid" rowSpacing={2} columnSpacing={5}>
  <Grid className="left-grid" item lg={3}>
    <div className="filters-heading">
      <h3>Filters</h3>
    </div>
  </Grid>
  <Grid className="right-grid" item lg={9}>
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
      {selectedTab === 0 && (
  <div>
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item lg={3}>
        <div className="product-image">
        <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70" alt="Product" />
        </div>
      </Grid>
      <Grid item lg={5}>
      
        <div className="product-details">
          <h3>SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)</h3>
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
          <p>₹11,445</p>
          <p>₹14,999 <span>23% off</span></p>
          <p>Free delivery</p>
          <p>Save extra with combo offers</p>
          <p>Bank Offer</p>
        </div>
      </Grid>
    </Grid>
  </div>
)}
      {selectedTab === 1 && <div>Tab 2 Content</div>}
      {selectedTab === 2 && <div>Tab 3 Content</div>}
    </div>
  </Grid>
</Grid>
    </div>
  );
};
