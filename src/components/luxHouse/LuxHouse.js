import React, { useLayoutEffect } from 'react'
import './luxHouse.css'
import beachHouse from './beachhouse1.jpg';
import ImageGallery from 'react-image-gallery';



const images = [
    {
        original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614671255-69PO21SJ772VIM2VU0MK/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/beachhouse3.jpg?format=2500w',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614671255-69PO21SJ772VIM2VU0MK/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/beachhouse3.jpg?format=150w',
    },
    {
        original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614656900-6M3SM5HBL0IF40YNAP2L/ke17ZwdGBToddI8pDm48kJZIEsT4E8AVdWi1z8NDvFYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRUn_L5N_EA4hubcHB9zHuNkwJHh2narcN36XIgCvGm_GK0eXPGCls6o11WSRyqva/beachhouse1.jpg?format=2500w',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614656900-6M3SM5HBL0IF40YNAP2L/ke17ZwdGBToddI8pDm48kJZIEsT4E8AVdWi1z8NDvFYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRUn_L5N_EA4hubcHB9zHuNkwJHh2narcN36XIgCvGm_GK0eXPGCls6o11WSRyqva/beachhouse1.jpg?format=150w',
    },
    {
        original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614662605-FOQB1S8ODXLV8O935T9A/ke17ZwdGBToddI8pDm48kGTzhYnQLM0LSHHVHrWmhMR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufhr0Q_4PBcY6B49iDZCiMfZpT8QXU1-s6dWf3o7vAXAd4HtsY2Zp0IDlVqCi5FVIw/beachhouse2.jpg?format=2500w',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614662605-FOQB1S8ODXLV8O935T9A/ke17ZwdGBToddI8pDm48kGTzhYnQLM0LSHHVHrWmhMR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufhr0Q_4PBcY6B49iDZCiMfZpT8QXU1-s6dWf3o7vAXAd4HtsY2Zp0IDlVqCi5FVIw/beachhouse2.jpg?format=150w',
    },
    {
        original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614680417-0RZF6ITH9DMUQSPA5E9W/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/beachhouse5.jpg?format=2500w',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614680417-0RZF6ITH9DMUQSPA5E9W/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/beachhouse5.jpg?format=150w',
    },
    {
        original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614680942-UX69V8HF0AHL6ZYP2FR8/ke17ZwdGBToddI8pDm48kO_YTB3UTLvaDRR1YD2Da7N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ubf7zjQF3ZgX-xcWt0sbTB4RUwI3n0pQRXROZc0CAm6WkDG4BLw9YI6lXaaprSfrDg/beachhouse4.jpg?format=2500w',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494614680942-UX69V8HF0AHL6ZYP2FR8/ke17ZwdGBToddI8pDm48kO_YTB3UTLvaDRR1YD2Da7N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ubf7zjQF3ZgX-xcWt0sbTB4RUwI3n0pQRXROZc0CAm6WkDG4BLw9YI6lXaaprSfrDg/beachhouse4.jpg?format=150w',
    },
    {
        original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494727056703-9N20J9AAUPN8EHAEOBHQ/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/-Drake+Bay-2783_DxO.jpg?format=2500w',
        thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494727056703-9N20J9AAUPN8EHAEOBHQ/ke17ZwdGBToddI8pDm48kOggE0Ch6pMGalwtLMqzsSB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ufo5RWkg_J4of0jUNHaDHx6pZKBvpVYzidBWCapg0tuoMuEaB2HPGSYDV-11UTcW2g/-Drake+Bay-2783_DxO.jpg?format=150w',
    },

];

export default function About() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <div className="about">
            <div className="about-container">

                <div className="banner-container">
                    {/* <img className="banner-image" src='https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1494619410157-LRNFL8Z2QGFBUCJE37SA/ke17ZwdGBToddI8pDm48kJZIEsT4E8AVdWi1z8NDvFYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRUn_L5N_EA4hubcHB9zHuNkwJHh2narcN36XIgCvGm_GK0eXPGCls6o11WSRyqva/beachhouse1.jpg?format=2500w' alt='' /> */}
                    <img className="banner-image" src={beachHouse} />
                </div>


                <div className="amenities">
                    <p style={{ marginBottom: "20px", fontSize: "32px" }}>AMENITIES</p>
                    <p style={{ fontWeight: 'bold' }}>
                        3 Bedrooms
                    </p>
                    <p style={{ fontWeight: 'bold' }}>
                        3 Bathrooms
                    </p>
                    <p style={{ marginBottom: "20px" }}>The 3 bedroom/ 3 bath Luxury Beach House is appointed with the following, with your comfort in mind:</p>
                    <ul className="amen-list" style={{ paddingLeft: "20px" }}>
                        <li>Air-Conditioning</li>
                        <li>Orthopedic beds</li>
                        <li>Luxurious Comphy Sheets</li>
                        <li>Hot Water</li>
                        <li>Hair Dryer</li>
                        <li>Biodegradable Shampoo & Conditioner</li>
                        <li>Daily Room Tidy</li>
                        <li>In-Room Safe</li>
                        <li>Smoke Free Rooms</li>
                        <li>Purified Water</li>
                        <li>Satellite TV & DVD Player </li>
                        <li>Wifi</li>
                        <li>Laundry Service available upon request</li>
                    </ul>
                </div>

                <ImageGallery items={images} style={{ width: "100%" }} />
            </div>


        </div >

    )
}
