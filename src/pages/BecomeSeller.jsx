import React from 'react';
import { Link } from 'react-router-dom';
import "./css/BecomeSeller.css";

export const BecomeSeller = () => {
  return (
    <div>
      <div className='existing-seller'>
        Existing Seller? Explore our product recommendations with Dhamaka Selection
      </div>

      <div className="_9yux row-container">
        <div className='become-seller-img'>
          <img src="https://cdn.dribbble.com/users/3512533/screenshots/14168149/media/b2ee4535ff531f487f0a179d7cf91e20.jpg?resize=400x0" alt="Seller" />
        </div>
        <div className="_5ctx">
        <div className="links-container">
          <ul className="links-list">
            <li>Sell Online</li>
            <li>Fees and Commission</li>
            <li>Grow</li>
            <li>Learn</li>
            <li>Shopsy</li>
          </ul>
        </div>
        <div className='start-selling-button'>
          <li>
            Login
            </li>
            <Link to="/start-selling">
            <li className='selling-button'>
            Start Selling
            </li>
            </Link>
        </div>
        </div>

      </div>
    </div>
  );
}
