import React from 'react'
import './footer.css'
import styled from 'styled-components'

const Foots = styled.div`
.footer {
  height: 15vh;
  width: 100%;
  background-color: black;
}
`

export default function Footer() {
    return (
        <Foots>
            <div className="footer">
                <p>call today 555555555</p>
                <p >&copy; NowOSA</p>
            </div>
        </Foots>
    )
}
