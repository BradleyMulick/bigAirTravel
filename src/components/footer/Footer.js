import React from 'react'
import styled from 'styled-components'
import './footer.css'

const Foot = styled.div`

  height: 13vh;
  width: 100%;
  background-color: black;

  .container {
      color: whitesmoke;
display: flex;
justify-content: space-around;

  }



`

export default function Footer() {
    return (
        <Foot>
            <div className="container">

                <h2 style={{ paddingTop: "30px" }}>Call Today: 1-385-313-0079</h2>
                <h2 style={{ paddingTop: "30px" }}>&copy;NowOSA</h2>
            </div>


        </Foot>
    )
}
