import React from 'react'
import './about.css'


import Jeremy from './record.jpg'



export default function About() {
    return (
        <div className="about">
            <div className="about-container">

                <div style={{ marginBottom: "40px" }}>
                    <img src={Jeremy} alt='' />

                </div>
                <p className="para">
                    Born in Hong Kong and raised in the U.S., Captain Jeremy Kelly Librett grew up fishing and skiing.  A self-taught person he fell in love with Costa Rica while on an adventure trip in the early 1990s. Soon following he built the storied sport fishing vessel On The Fly and went on to form a highly successful travel and guide business pioneering/perfecting  big game, saltwater fly fishing in Costa Rica. His love of the Osa Peninsula led him to develop the Northern Osa Sustainable Initiative, a philanthropist-capital land fund supporting land preservation, reforestation, organic farming and sustainable tourism. When not on his boat or exploring Costa Rica, Captain Jeremy can be found shredding the Bird in the Wasatch Mountains of Utah.
                  </p>

            </div>


        </div>

    )
}
