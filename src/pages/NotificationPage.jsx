import React from 'react'
import {BiSolidBell} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import "./css/NotificationPage.css";
import { Outlet } from "react-router-dom";
export const NotificationPage = () => {
  return (
    <div className="_7tnx">
        <div className="_7gcb">
        <div className="_8fyl">
            <div className="_8gbw"><BiSolidBell/></div>
            <div className="_9epa">Notification Preferences</div>
        </div>
      <div className="_6llk">
                <Link to="/notifications-page/desktop   "><li>Desktop Notifications </li></Link>
                <Link><li>In-App Notifications </li></Link>
                <Link><li>SMS </li></Link>
                <Link><li>Email </li></Link>
                <Link><li>WhatsApp </li></Link>

                </div>
    
        </div>
        <div className="_3ynl">
        <Outlet />
        </div>
    </div>
  )
}


