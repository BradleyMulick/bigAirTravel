import React, { useLayoutEffect } from 'react'
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components'
import './accom.css'


const Accomo = styled.div`
width: 100%;
text-align: center;
font-family: europa, sans-serif;
font-weight: 300;
font-style: normal;
font-size: 16px;
letter-spacing: 2px;
line-height: 1.4em;


ul {
    margin-top: 10px;
}

h2 {
    font-family: europa, sans-serif;
font-weight: 100;
font-style: normal;
font-size: 16px;
letter-spacing: 0px;
text-transform: none;
line-height: 1.2em;
}

.img-galleryz {
text-align: left;
width: 35%;
margin: 20px;
}

.room-p {

    font-weight: 300;
font-style: normal;
font-size: 16px;
letter-spacing: 2px;
line-height: 1.4em;
display: inline-block;
}

.rooms {
    padding-top: 80px;
    display:flex;
    justify-content: center;
    width: 100%;
    text-align: left;

  
}

.amens {
    text-align: left;
    display: inline-block;
    width: 70%;
    font-family: europa, sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 1.4em;

}

.amens p {
    margin-top: 40px;

}

.amens ul {
    margin-top: 40px;
    padding-left: 30px;
}

.title {
    font-family: europa, sans-serif;
  font-weight: 100;
  font-style: normal;
  font-size: 36px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.2em;

}

.book-btn {
    width:200px;
    height:75px;
    border: 2px solid red;
    border-radius: 2%;
    font-family: europa;
font-size: 15px;
font-weight: 400;
font-style: normal;
text-transform: uppercase;
letter-spacing: 3px;
background-color: white;
}

.beds {
    text-align: center;
    list-style-type: none
}

.book-btn-contain {
text-align: center;
margin: 75px 0 150px 0;
border: 2px solid black;
}

@media (max-width: 768px){
    .rooms {
text-align: center;
        display: block;
    }

    .img-galleryz {
        width: 90%;
    }
}
`

function Accomodations() {
    const images = [
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432899925765-KAMYXUP8U5TV1ZIZ9L80/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/sunsetrancho.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432899925765-KAMYXUP8U5TV1ZIZ9L80/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/sunsetrancho.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432899985974-M51GDCSGEBUASA6UAAFT/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/sunsetrancho2.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432899985974-M51GDCSGEBUASA6UAAFT/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/sunsetrancho2.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432899988735-W3FRGCTO5C9N0XJYEG3X/ke17ZwdGBToddI8pDm48kFOJCex-rbfpoU9FAegvnrIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcXA0Mhqv80DCuQW4zQEwq1R-ayca0g-tExWrOc5Se2aIiooPqewV-8wpawvAYY-6d/sunsetrancho3.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432899988735-W3FRGCTO5C9N0XJYEG3X/ke17ZwdGBToddI8pDm48kFOJCex-rbfpoU9FAegvnrIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcXA0Mhqv80DCuQW4zQEwq1R-ayca0g-tExWrOc5Se2aIiooPqewV-8wpawvAYY-6d/sunsetrancho3.jpeg?format=300w',
        },
    ];
    const images2 = [
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921190560-X91408U3JYZ25LP1Y1K1/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe2.5.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921190560-X91408U3JYZ25LP1Y1K1/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe2.5.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921253113-AGVUETUYHSTBSLX5PFTE/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe2.6.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432921253113-AGVUETUYHSTBSLX5PFTE/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe2.6.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900555886-IFPT8W7HG8Y2DC5Z3ITM/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe22.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900555886-IFPT8W7HG8Y2DC5Z3ITM/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe22.jpeg?format=300w',
        },
    ];
    const images3 = [
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900839885-K9WADD3ILHVTX01050EH/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900839885-K9WADD3ILHVTX01050EH/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900843592-KJD9MTDXUTCVVIDXLXJR/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe12.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900843592-KJD9MTDXUTCVVIDXLXJR/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/deluxe12.jpeg?format=300w',
        },

    ];
    const images4 = [
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900595126-J023RJSHIHWYT7Z242HO/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/superior.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900595126-J023RJSHIHWYT7Z242HO/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/superior.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900604340-0HIAGUOWP1I0BLZQIZTS/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/superior3.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900604340-0HIAGUOWP1I0BLZQIZTS/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/superior3.jpeg?format=300w',
        },
        {
            original: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900596010-O7U5UDJSF5ET68FUO81F/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/superior2.jpeg?format=1000w',
            thumbnail: 'https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432900596010-O7U5UDJSF5ET68FUO81F/ke17ZwdGBToddI8pDm48kPqJSAio1NKDvIK-wXfTDCUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCEK8Cx-Dx_Vx-Bo7p4kFDmvGEycJoxloB6oTivkJoR6zvRZrxl5WeKq7DYSG24RR/superior2.jpeg?format=300w',
        },
    ];

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (

        <Accomo>
            <div className="rooms">
                <div className="img-galleryz">

                    <ImageGallery items={images} />
                    <h1 className="title">Sunset Ranchos</h1>

                    <h2>TWO STORY 2 BEDS / 2 BATHS - (2 available)</h2>
                    <p className="room-p">Sunset Ranchos offer sweeping vistas of the Pacific Ocean.  You can fall asleep to the sound of the ocean, awaken to the symphony of the rainforest and catch a glimpse of a magnificent sunset over Caño Island from the comfort of your balcony.
                        </p><p className="room-p">
                        The Sunset Ranchos are equipped with A/C and have bathrooms on both the upper and lower levels.
                    </p><p className="room-p">
                        These Ranchos can be configured to sleep families of up to 6 people using various beds.
</p>
                    <ul className="beds">
                        <li>KING</li>
                        <li>QUEEN</li>
                        <li>SINGLE</li>
                    </ul>
                </div>
                <div className="img-galleryz">
                    <ImageGallery items={images2} />
                    <h1 className="title">Deluxe Ranchos</h1>
                    <h2>TWO STORY 3 BEDS / 2 BATHS - (3 available)</h2>
                    <p className="room-p">Deluxe Ranchos are spread around lush vegetation maximizing privacy and seclusion yet offering magnificent ocean views. Listen to the sounds of the jungle from your hammock, watch toucans fly past and let the cool ocean breeze lull you to sleep.
                    </p><p className="room-p">The Deluxe Ranchos are equipped with A/C and have bathrooms on both the upper and lower levels.
                    </p><p className="room-p">These Ranchos can be configured to sleep families of up to 6 people using various configurations of beds.
</p>
                    <ul className="beds">
                        <li>KING</li>
                        <li>QUEEN</li>
                        <li>SINGLE</li>
                    </ul>

                </div>
            </div>
            <div className="rooms">
                <div className="img-galleryz">

                    <ImageGallery items={images3} />
                    <h1 className="title">Deluxe Ranchos</h1>
                    <h2>ONE STORY 1 BEDS / 1 BATHS - (2 available)</h2>
                    <p className="room-p">Our Deluxe Ranchos are spread around lush vegetation maximizing privacy and seclusion yet offering magnificent ocean views. Listen to the sounds of the jungle from your hammock, watch toucans fly past and let the cool ocean breeze lull you to sleep.
                    </p>
                    <p className="room-p">

                        The one story Deluxe Ranchos are equipped with A/C and configured to up to 3 people
                        </p>

                    <ul className="beds">
                        <li>KING</li>

                        <li>SINGLE</li>
                    </ul>
                </div>
                <div className="img-galleryz">
                    <ImageGallery items={images4} />
                    <h1 className="title">Superior Rooms</h1>
                    <h2>1 BED / 1 BATH - (4 available)</h2>
                    <p className="room-p">Our Superior Rooms offer private balconies with beautiful views of the Pacific Ocean. Set amongst the jungle you can watch for monkeys playing in the nearby trees, while relaxing in your hammock.</p>
                    <p className="room-p">These beautiful rooms are equipped with A/C and configured up to 3 people</p>
                    <ul className="beds">
                        <li>KING</li>

                        <li>SINGLE</li>
                    </ul>

                </div>
            </div>

            <div className="amens">
                <p style={{ fontSize: "36px" }}>AMENITIES</p>
                <p>Our rooms and ranchos are appointed with the following, with your comfort in mind:</p>
                <ul >
                    <li>Air-Conditioning</li>
                    <li>Ceiling Fans</li>
                    <li>Orthopedic beds</li>
                    <li>Luxurious Sheets</li>
                    <li>Hot Water</li>
                    <li>Hair Dryer</li>
                    <li>Biodegradable Shampoo & Conditioner</li>
                    <li>Daily Room Tidy</li>
                    <li>In-Room Safe</li>
                    <li>Smoke Free Rooms</li>
                    <li>Filtered Water Carafes</li>
                </ul>
                <p>
                    Wifi is available in the main dining room, however, it can be limited due to the remoteness of the lodge. We recommend disconnecting and experiencing a totally unplugged vacation. Leave your work & worries behind and enjoy the back-to-nature living offered at La Paloma Lodge.
                </p>
                <div className="book-btn-contain">
                    {/* <Link to="/book"><button className="book-btn" >BOOK NOW</button></Link> */}
                    <p>
                        Call Captain Jeremy Kelly Librett: 435-962-9397
                        
                        </p>

                        <p style={{marginBottom: "40px"}}>
                    Email: captain@nowosa.com

                        </p>

                </div>
            </div>




        </Accomo >
    )
}


export default Accomodations