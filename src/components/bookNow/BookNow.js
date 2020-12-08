import React, { useLayoutEffect } from 'react'
import './bookNow.css'

export default function About() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <div className="about">
            <div className="about-container">
                <h1>About</h1>
                We are unique, having nearly 30 years of arranging, hosting and facilitating people's dream vacation to Costa Rica
What we have discovered...  The Osa Peninsula is one of the most SPECTACULARLY BEAUTIFUL places on earth. Peaceful, Fun, Adventurous, Exotic…. The Primary Rainforest is a must do in life.

                    <div>
                    <img src='https://images.squarespace-cdn.com/content/v1/555f7716e4b0c32dcc3cfe69/1432918899539-H33CRPKAZUM11IVM6K8D/ke17ZwdGBToddI8pDm48kLy5t3x7mHH_-Gc6wF84Y30UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcCz0hMrAmgNUbDZqZ0zSFAQF64k1uhMhCRP8TgdPO161bBQuXmE1y5C6T0_Ghui5Y/image-asset.jpeg?format=750w' alt='' />
                    <h1>CONSERVATION</h1>
                    <p>When we came to Costa Rica in the early 1980s, there were no plastic bottles, no disposable diapers and very few plastic bags.  You purchased your meat, chicken or fish and it was wrapped in newspaper. You carried it home in the bag you brought. At La Paloma Lodge, we strive for that kind of simplicity and ecological sustainability. La Paloma Lodge uses recyclable glass bottles for sodas and beer.  We have a reverse osmosis system and buy no plastic water bottles. We are members of an organization (Catuosa) working toward the elimination of single-use plastic. We also have the first electric car in the area. Much of our food waste is collected by a local pig farmer; we have a food composting system for all that remains.</p></div>
            </div>


        </div>

    )
}
