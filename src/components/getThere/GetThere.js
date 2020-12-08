import React from 'react'

import styled from 'styled-components'

const Getter = styled.div`
display: inline-block;
margin-bottom: 40px;


font-family: europa, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 1.4em;
.there-content {
text-align: center;
}

.header-img2{

}

.rates-boxs {
padding: 44px;
display 80%;
}

.get-column {
    margin-top: 100px;
    width: 65%;
    display: inline-block;

display: inline-block;
text-align:  left;
}

.get-title {
margin-bottom: 40px;
}

.details-holder {
    text-align: center;
    padding-left:50px;
}

.flight-details {
    width: 100%;
    text-align: left;


}

.flight-details li {
    margin-top: 20px;
}

.depart-details {

    padding: 20px;
    margin-bottom: 10px;
}

.depart-details h3 {

}

.bottom-para {
    font-family: calluna;
    font-weight: 200;
font-style: normal;
font-size: 20x;
letter-spacing: 2px;
line-height: 1.4em;
}

@media (max-width: 768px) {
.getting-osa{
    font-size: 14px;
    line-height: 2;
}
}
`

export default function Rates() {
    return (
        <Getter>
            <div className="there-content">
                <div className="header-img2"></div>
                <div className="get-column">
                    <div className="get-title">
                        <p className="getting-osa" style={{ fontSize: "36px" }}>GETTING TO THE OSA</p>

                    </div>
                    <div className="depart-details">
                        <p style={{ marginBottom: "30px" }}>Depart Salt Lake City, USA 11:00 Pm Friday</p>
                        <p>Arrive San Jose, Costa Rica 6:00 AM Saturday</p>

                    </div>
                    <p style={{ marginTop: "-20px" }}>FLIGHT DETAILS
</p>
                    <div className="details-holder">

                        <ul className="flight-details">
                            <li>New Airbus A320 Planes with Airspace cabins.</li>
                            <li>Ample room with only 70% of the cabin space occupied by guests</li>
                            <li>Fully Transferable Tickets</li>
                            <li>SKY Cap Service point to point</li>
                            <li>Streamlined & Efficient Boarding and DePlaning</li>
                            <li>Smart Flight Scheduling</li>
                            <li>Two Fifty Pound Bags Free</li>
                            <li>Sporting Equipment Flies Free</li>
                            <li>Organic Farm to Table Wine and Food</li>
                            <li>Friendly & Helpful Staff </li>
                            <li>Dedicated Concierge for you Travel needs </li>
                            <li>One contact Turnkey Vacation</li>
                            <li>Access to proprietary Hotel buyouts</li>
                            <li>30 Years Experience with International Tourism</li>
                        </ul>
                    </div>

                    <p className="bottom-para">Upon arrival in San Jose you will transfer to a Cessna Caravan for a 45 minute flight to Drake Bay.</p>

                    <p className="bottom-para">                    Once you land in Drake Bay, a taxi will take you on a 20 minute drive to the beachside town of Drake Bay where you will board a boat for a short (5 min) ride across the bay to the La Paloma Lodge dock.
</p>


                </div>
                <p>Your international flight and in-country flight is Private and arranged by BAT
</p>
            </div>
        </Getter>
    )
}
