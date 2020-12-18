import React from 'react'
import "./rates.css"
import styled from 'styled-components'

const Rats = styled.div`


.rates-column {
    display: flex;
    justify-content: center;
    
}
.rates-boxs {
padding: 44px;
display: 30%
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
            <div className="rates-column">
                <div className="rates-boxs">
                    <h1>Sunset</h1>
                    <p>$4,424 per person</p>
                    <p>
                        $3,500 per child</p>
                </div>
                <div className="rates-boxs"><h1>
                    Deluxe
                    </h1>
                    <p>
                        $4,109 per person
                        </p>
                </div>
                <div className="rates-boxs"><h1>
                    Superior</h1>
                    <p>
                        $3,739 per person</p>
                </div>
            </div>
            <div className="rates-column">
                <div
                    className="rates-boxs">
                    <h1>
                        Buy Out
                </h1>
                    <h2>38 person</h2>
                    <p>
                        $4,058 per person</p>
                    <p>
                        Total $154,152</p></div>
                <div
                    className="rates-boxs">
                    <h1>
                        Beach House
                </h1>
                    <p>
                        Master: $4,109 per person</p>
                    <p>
                        Apartment $3,739 per person</p>
                </div>
                <div
                    className="rates-boxs">
                    <h1>
                        Buy Out
                </h1>
                    <h2>20 person</h2>
                    <p>
                        $4,061 per person</p>
                    <p>
                        Total $81,220</p></div>
            </div>


        </Rats>
    )
}
