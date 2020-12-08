import React from 'react'
import './about.css'


import Jeremy from './record.jpg'



export default function About() {
    return (
        <div className="about">
            <div className="about-container">

                We are unique, having nearly 30 years of arranging, hosting and facilitating people's dream vacation to Costa Rica
                What we have discovered...  The Osa Peninsula is one of the most SPECTACULARLY BEAUTIFUL places on earth. Peaceful, Fun, Adventurous, Exotic…. The Primary Rainforest is a must do in life.

                    <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <img src={Jeremy} alt='' />

                </div>
            </div>


        </div>

    )
}
