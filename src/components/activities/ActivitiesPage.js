import React from 'react'
import styled from 'styled-components'

import CanoIsland from './CanoIsland'
import CorcavadoPark from './CorcavadoPark'
import HorseRide from './HorseRide'

const Activis = styled.div`

width: 100%;
display: flex;
    justify-content: center;
align-content:center;


.activity-grid {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
column-gap: 4vw;
row-gap:4vh;
padding:20px;

    
}
.activity-grid p {
    text-align: left;
    font-size: 10px;
    max-width: 220px;
    
    
}

.activity-grid img {
    display: flex;
    justify-content: center;
align-content:center;
    max-width: 220px;
    max-height: 160px;
    width:100%;
    height: auto;
}
.activity-grid div {

    max-width: 100%;
}

.img-holder {
    display: flex;
    justify-content: center;
align-content:center;
width: 100%;
}



`

function ActivitiesPage() {
    return (
        <Activis>
            <div>
                <h3>TOURS AND ACTIVITIES</h3>
                <div className="activity-grid">
                    <div>
                        <h3>Corcovado PArk</h3>
                        <div className="img-holder">
                            <img src="https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432991758024-0X1ROOHP5YBEJ4FH2N3A/ke17ZwdGBToddI8pDm48kGEd1XHoD0IARVNIBF2vSaoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcAbF6GUbkusUFT3trZriwoKh03Cs8Nm-QlfoVLAAYaevOOZ2cO4KB_flmbz4ZdcBA/image-asset.jpeg?format=300w" alt="" />

                        </div>
                        <p>Corcovado National Park has been cited by National Geographic as "one of the most biologically intense places on earth" and our guided tours of the park are sure to prove them right. Boas, scarlet macaws, reptiles, and several species of monkeys are some of the creatures you might see.</p>
                        <button>Learn More</button>
                    </div>
                    <div>
                        <h3>Horse Ride</h3>
                        <div className="img-holder">
                            <img src="https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432991356772-FH4EYJKZTKAM5ZWE0HWV/ke17ZwdGBToddI8pDm48kMQ4wTzo2awNDr8kRNxSikhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzryrumNFFjEciWSP2on4fHdbCALEbeHd5-On5eIGIabTxG9G4uY1mTW6dKpnkJITE/image-asset.jpeg?format=300w" alt="" />
                        </div>
                        <p>Ride through primary rainforest or along empty beaches. You will be guided along our undeveloped coast line by local horseman. These tours are not only for experienced riders; anyone with an interest in exploring primary rain forest outside of Corcovado Park will enjoy this tour.

</p>
                        <button>Learn More</button>

                    </div>
                    <div>
                        <h3>Cano Island</h3>
                        <div className="img-holder">
                            <img src="https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432991636030-KA7X7NDJSV9D3TLZF3JI/ke17ZwdGBToddI8pDm48kONoKYpnJ9ygf1zVgkv4MI1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxsKdwWMVzsnO8c5Brd8aLDkoznU1ydJNGZ3AwUGD61Qus4Lb7yWLSrVgDfjN-A4vc/image-asset.png?format=400w" alt="" />
                        </div>
                        <p>The water surrounding Isla del Caño is some of the bluest in the country, and home to a spectacular variety of stunning marine life and gorgeous coral reefs. This 300-hectare piece of land was formerly a burial ground dating back to the pre-Columbian era of the Diquis tribal people. </p>
                        <button>Learn More</button>

                    </div>
                    <div>
                        <h3>Kayaking</h3>
                        <div className="img-holder">
                            <img src="https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432898525524-TCD3UZ43EH29J87A65TP/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/image-asset.jpeg?format=500w" alt="" />                        </div>
                        <p>Spend the afternoon on a leisurely paddle on the Agujitas river. From our dock, our guests are welcome to use a single or double kayak and explore the cool waters, charming waterfalls, and diverse wildlife. Look for birds soaring overhead or monkeys playing in the trees. For those looking for more adventure, paddle out the rivermouth to the ocean and along the beautiful coast. </p>
                        <button>Learn More</button>

                    </div>
                    <div>
                        <h3>Birding</h3>
                        <div className="img-holder">
                            <img src="https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432897835894-D7DCN4SRWLSA6W26YRG4/ke17ZwdGBToddI8pDm48kGkfRrhoKHsvm0v1PsyqlXh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URQ7wWu1HD1aIf7LeHBb_E6UgK-0-wl4EPs6Te5LC7joy4esdQB3BRl8sZrbGldWOw/image-asset.jpeg?format=300w" alt="" />                        </div>
                        <p>The abundance of bird life surrounding La Paloma Lodge is amazing. View tanagers, hummingbirds, macaws, toucans, manakins, and so much more just steps away from the lodge. Our naturalist guides have extensive knowledge of the area and the numerous bird species that reside here. Their keen eyes and expertise in bird calls will impress even the most avid birder.</p>
                        <button>Learn More</button>

                    </div>
                    <div>
                        <h3>Scuba Diving</h3>
                        <div className="img-holder">
                            <img src="https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432898804433-G72WT2F9D0ZNB3D5TQQY/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/image-asset.jpeg?format=500w" alt="" />                        </div>
                        <p>Experience world-class diving at the Caño Island Biological Reserve. Highlights of this area's dive locations are the manta and mobula rays, the abundant population of white tip reef sharks, Ridley and Hawksbill turtles, barracuda and giant schools of pelagic fish. Visibility often exceeds 80 ft and temperatures range from upper 70's to low 80's.</p>
                        <button>Learn More</button>

                    </div>
                </div>
            </div>
        </Activis>
    )
}


export default ActivitiesPage