import React from 'react'

import styled from 'styled-components'

const Rats = styled.div`

font-family: europa, sans-serif;
font-weight: 300;
font-style: normal;
font-size: 16px;
letter-spacing: 2px;
line-height: 1.4em;


.rates-column {
    display: flex;
    justify-content: center;
    
    
}
.rates-boxs {
padding: 44px;
display: 30%;
font-size: 30px;
font-weight: normal;
}

.rates-column h1 {
    font-size: 54px;
}

.rates-container {
  width: 100%;
  height: 100vh;
  background-color: thistle;

}

.header-img {
  height: 60vh;
  width: 100%;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: 100%;
  background-position: center;
  background-image: url("https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1524946374169-BIT9G88MDTHF5OHDPVP9/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_3491.jpg?format=2500w");
}

.intro {
    font-size: 22px;

}

.packages {
    margin-top:5vh;
    text-decoration: underline;
}

@media (max-width: 768px) {
    .rates-column {
        display: block

    }

    .header-image {
    
            margin-top: -130px;
    
    }

   
}
`

export default function Rates() {
    return (
        <Rats>
            <div className="header-img"></div>
            <h1 style={{ marginTop: "5vh" }}>ALL VACATION PACKAGES INCLUDE</h1>
            <div className="intro">
                <ul>
                    <li>Seven Night / Eight Day Accommodations</li>
                    <li>International & Domestic Airfare</li>
                    <li>All Meals</li>

                    <li>Full day guided tour to Corcovado National Park</li>
                    <li>Full Day guided tour to Caño Island</li>
                </ul>

            </div>
            <div className="rates-column">
                <div className="rates-boxs"><h1>
                    Superior</h1>
                    <p>
                        $4,889 per person</p>
                    <p>
                        $4,650 per child</p>
                </div>
                <div className="rates-boxs"><h1>
                    Deluxe
                    </h1>
                    <p>
                        $5,259 per person
                        </p>
                </div>

                <div className="rates-boxs">
                    <h1>Sunset</h1>
                    <p>$5,574 per person</p>

                </div>
            </div>
            <div className="rates-column">
                <div
                    className="rates-boxs">
                    <h1>
                        Buy Out
                </h1>
                    <h2><u>38 person</u></h2>
                    <p>
                        $5,208 per person</p>
                    <p>
                        Total $197,852</p></div>
                <div
                    className="rates-boxs">
                    <h1>
                        Beach House
                </h1>
                    <p>
                        Master: $5,259 per person</p>
                    <p>
                        Apartment $4,889 per person</p>
                </div>
                <div
                    className="rates-boxs">
                    <h1>
                        Buy Out
                </h1>
                    <h2 ><u>20 person</u></h2>
                    <p>
                        $5,211 per person</p>
                    <p>
                        Total $104,220</p></div>
            </div>


        </Rats>
    )
}
