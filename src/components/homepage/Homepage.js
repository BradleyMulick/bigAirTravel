import React, { Component } from 'react'
import './homepage.css'

import AwesomeSlider from 'react-awesome-slider';
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery';
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
                    <div class="vimeo-wrapper">
                        <iframe src="https://player.vimeo.com/video/487867058?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
                            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>
                    </div>



                </div>



                <div className="opening-para" style={{
                    textAlign: "center"
                }}>

                    <p style={{
                        fontSize: "30px", lineHeight: "1.5", letterSpacing: "5"
                    }}>
                        Enjoy “The Most Biological Place on Earth”  Costa Rica’s Osa Peninsula...National Geographic
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
