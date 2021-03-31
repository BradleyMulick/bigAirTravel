import React, { Component } from 'react'
import './homepage.css'


import HomeGallery from './HomeGallery'
import { Link } from "react-router-dom";




export default class Homepage extends Component {




    constructor(props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/embed/SOLCiQZS7wE'
        }


    }



    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {


        return (
            <div className="homepage" >
                <div className="hero-header">

                    <div className="placeholder-img">

                        <img className="the-image" src='https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1497727025821-B48D1Y1UDXPKTIQAJTVE/ke17ZwdGBToddI8pDm48kA_SSaoz4elkj-HsZd8gX3Z7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWPwZyNcweDIvdeL5kotwkIXjs9g0WibSO_cU-Ijy4Pwg6poS-6WGGnXqDacZer4yQ/2017_LaPaloma_CostaRica-613.jpg?format=2500w' alt='' zIndex="100" />
                    </div>
                    <div class="vimeo-wrapper" >
                        <iframe title="intro-vid" src="https://player.vimeo.com/video/487867058?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
                            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>
                    </div>



                </div>



                <div className="opening-para" style={{
                    textAlign: "left"
                }}>

                    <p className="highlights" style={{
                        fontSize: "48px", lineHeight: "1.5", letterSpacing: "5", marginTop: 100
                    }}>
                        Costa Rica’s Osa Peninsula...
                    </p>

                    <p
                        style={{
                            fontSize: "18px", lineHeight: "1.5", letterSpacing: "5"
                        }}>
                        Where National Geographic designates <b>"The most biologically intense place on Earth”. </b> 13 tropical ecosystems home to rare and endangered animals and fish, as well as over two percent of the earth’s flora and fauna.

                    </p>
                    {/* <p style={{
                        fontSize: "30px", lineHeight: "1.5", letterSpacing: "5"
                    }}>
                        To experience the area’s lush rainforest, tropical fjords and white sand beach is to experience nature at its best: stunning, unspoiled, and secluded. The Osa Peninsula is one of the most SPECTACULARLY BEAUTIFUL PLACES ON EARTH. Let us guide you through the wonders of this magical place.

                    </p> */}

                    <ul
                        style={{
                            borderRadius: 5,
                            border: '2px black solid',
                            margin: 40,
                            padding: '10%',
                        }}>
                        <h2

                            style={{
                                textAlign: "center",

                            }}>Trip
                            Highlights
</h2>
                        <li>Enjoy exceptional, personalized service from NowOsa’s experienced hosts and guides</li>
                        <li>Travel by private Airbus A320 with airspace cabins set at 70% occupancy
</li>
                        <li>Choose to stay in beautiful villas or the luxury beach house
</li>
                        <li>Dine on delicious, local, organic farm-to-table meals
</li>
                        <li>Hike the longest stretch of lowland pacific rainforest on earth
</li>
                        <li>Enjoy the adrenaline rush of sport fishing for blue marlin — one of the world’s largest fish
</li>
                        <li>Dive among deep underwater caves, canyons, cliffs, and 15-foot tall coral reefs
</li>
                    </ul>

                    <p style={{
                        fontSize: "18px", lineHeight: "1.5", letterSpacing: "5"
                    }}>
                        <b>Costa Rica Osa Adventures</b>  is unlike any typical expedition and guide service. We are unique, having nearly 30 years experience arranging, hosting and facilitating people’s dream vacations to Costa Rica. Our team prides itself on an unparalleled knowledge of — and love for — the land and the sea surrounding it. We know the Osa because we live in the Osa.  The primary rainforest is a must do in life, and we make it our job to ensure the safest, most enjoyable, and most successful experience possible for every one of our guests.

                    </p>
                </div>
                {/* 
                <p className="quote1">
                    <h3>One of the most stylish Lodges in Costa Rica - polished hardwoods and hammocks, floor to ceiling windows, stunning views of the Pacific Ocean...</h3>
                    <h4>— Haper's Bazaar Travel Guide</h4>
                </p> */}
                <div className="button-group">

                    <Link to="/accomodations"><button>Villas</button></Link>
                    <Link to="/luxury-beach-house"><button>Luxury Beach House</button></Link>
                    {/* <Link to="/book"><button>Activities</button></Link> */}
                </div>


                <div className="home-gallery">

                    <HomeGallery />
                </div>
            </div >
        )
    }
}
