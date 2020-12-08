import React from 'react'
import './navbar.css'
import NavMenu from './NavMenu'
import logo from './now-logo.png'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Burger from './Burger'



const Nav = styled.nav`
font-family: "Calluna-Regular";
height: 100px;

padding: 0 20px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(56, 56, 56);
z-index: 20;
.logo {
hegiht: auto;
width: 20%;
}

#logo-main {
    width: 100%;
}

@media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    .logo {
        hegiht: auto;
        width: 50%;
        }
}


`

const Navbar = () => {
    // const [isActive, setIsActive] = useState(false);
    // const onClick = () => setIsActive(!isActive);
    return (
        <Nav>

            <div className="logo">
                <Link to="/"><img id="logo-main" src={logo} alt="Logo" /></Link>
            </div>
            {/* <NavMenu /> */}
            <Burger />


        </Nav>

    )
}

export default Navbar