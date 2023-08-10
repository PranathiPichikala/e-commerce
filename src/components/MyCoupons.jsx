import React from 'react'
import "./css/Coupons.css";
const CouponData = [
    {
      offer: "Extra 30% off on Luggage & Bag",
      validity: 'Valid till 31 Aug, 2023',
      description:' Get extra 30% off on 1 item(s) (price inclusive of cashback/coupon)',
      view:'View T & C'
    },
    
    {
        offer: "Extra ₹100 off",
        validity: 'Valid till 31 Aug, 2023',
        description:' Get extra ₹100 off on 1 item(s) (price inclusive of cashback/coupon)',
        view:'View T & C'
      },
      {
        offer: "Extra ₹500 off",
        validity: 'Valid till 31 Aug, 2023',
        description:' Get extra ₹500 off on 1 item(s) (price inclusive of cashback/coupon)',
        view:'View T & C'
      },
      {
        offer: "Extra ₹500 off on Luggage & Bag",
        validity: 'Valid till 31 Aug, 2023',
        description:' Get extra ₹500 off on 2 item(s) (price inclusive of cashback/coupon)',
        view:'View T & C'
      },
    
  ];
  const UpcomingData = [
    {
      offer: "Get additional ₹5000 off on Debit and Credit",
      validity: 'Valid till 19 Jul, 2023',
      description:' Get additional ₹5000 off on Debit and Credit cards',
      view:'View T & C'
    },
    
    {
        offer: "Get additional ₹500 off on Debit and Credit",
        validity: 'Valid till 19 Jul, 2023',
        description:'Get additional ₹500 off on Debit and Credit cards',
        view:'View T & C'
      },
      {
        offer: "Get additional ₹1000 off on Debit and Credit",
        validity: 'Valid till 19 Aug, 2023',
        description:' Get additional ₹1000 off on Debit and Credit cards',
        view:'View T & C'
      },
      {
        offer: "Extra ₹5000 off on Luggage & Bag",
        validity: 'Valid till 31 Aug, 2023',
        description:' Get extra ₹5000 off on 2 item(s) (price inclusive of cashback/coupon)',
        view:'View T & C'
      },
    
  ];
  
  
export const MyCoupons = () => {

    return (
        <div className="_6hvd">
            <div className="_6nht">
                Available Coupons
            </div>
            {CouponData.map((data, index) => (
                <div className="_6ptd">
                <div className="_3qgl">
                    <div className="_0llh">
                  {data.offer}
                    </div>
                    <div className="_7gpk">
                        <span>{data.validity}</span>
                    </div>
                </div>
                <div className="_1pdu ">
                    <div className="_7plm">{data.description}</div>
                    <div className="_8xez"><span className="_6uya">{data.view}</span></div>
                </div>
            </div>
             ))}

            
            <div className="_6nht">
                Upcoming Coupons
            </div>
            {UpcomingData.map((data, index) => (
            <div className="_6ptd">
                <div className="_3qgl">
                    <div className="_9jjo">
                   {data.offer}
                    </div>
                    <div className="_7gpk">
                        <span>{data.validity}</span>
                    </div>
                </div>
                <div className="_1pdu ">
                    <div className="_7plm">{data.description}</div>
                    <div className="_8xez"><span className="_6uya">{data.view}</span></div>
                </div>
            </div>
                 ))}

            <div className="_6nht">
                Expired Coupons
            </div>
            <div className="_6ptd">
                <div className="_3qgl">
                    <div className="_9jjo">
                    Get additional ₹5000 off on Debit and Credit
                    </div>
                    <div className="_7gpk">
                        <span>Valid till 19 Jul, 2023</span>
                    </div>
                </div>
                <div className="_1pdu ">
                    <div className="_7plm">Get additional ₹5000 off on Debit and Credit cards</div>
                    <div className="_8xez"><span className="_6uya">View T & C</span></div>
                </div>
            </div>

            <div className="_6ptd">
                <div className="_3qgl">
                    <div className="_9jjo">
                    Get additional ₹500 off on Debit and Credit
                    </div>
                    <div className="_7gpk">
                        <span>Valid till 19 Jul, 2023</span>
                    </div>
                </div>
                <div className="_1pdu ">
                    <div className="_7plm">Get additional ₹500 off on Debit and Credit cards</div>
                    <div className="_8xez"><span className="_6uya">View T    & C</span></div>
                </div>
            </div>
        </div>
        
    )
}
