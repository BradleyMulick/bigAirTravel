import React from 'react'
import styled from 'styled-components'
import './footer.css'

const Foot = styled.div`

  height: 16vh;
  width: 100%;
  background-color: black;

  .container {
      color: whitesmoke;
display: flex;
justify-content: space-around;

  }

  @media (max-width: 768px) {
    h3 {
        font-size: 16px;

  }
  h1 {
      font-size: 18px
  }

  .container {
      color: whitesmoke;
display: block;


  }

  height: 24vh;
}

@media (max-width: 1200px) {

    margin-bottom: 0;
    h3 {
        font-size: 20px;

  }
  h1 {
      font-size: 22px
  }

}



`

export default function Footer() {
    return (
        <Foot>
            <div className="container">

                <h3 style={{ paddingTop: "20px" }}>Call Jeremy: 1-385-313-0079</h3>
                <h1 style={{ paddingTop: "20px" }}>&copy;NowOSA</h1>
                <h3 style={{ paddingTop: "20px" }}>Email: costacaptain@yahoo.com</h3>
            </div>


        </Foot>
    )
}
