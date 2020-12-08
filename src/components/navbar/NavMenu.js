import React, { useState } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

import styled from 'styled-components';





const Ul = styled.ul`
font-weight: 100;
  letter-spacing: 0.2em;
  font-size: 16px;
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
color: white;

  align-items: center;

margin-bottom: 0;
z-index: 15;
li {
    color: black;
    padding: 18px 10px
}

.book-button {
    color: white;
    padding: 15px;
    border: 2px solid white;
background-color: rgb(56, 56, 56);
font-family: "Calluna-Regular";
font-size: 14px;

}


.dropdown-menu {
    background-color: rgb(56, 56, 56);
}
.dropdown{
color: white;
}

.btn-success {
    color: black;
    background-color:  rgb(56, 56, 56);
    border-color: rgb(56, 56, 56);
}

.show > .btn-success.dropdown-toggle {
    color: #black;
    background-color: rgb(56, 56, 56);
    border-color: rgb(56, 56, 56);
}

@media (max-width: 768px){
display: block;
    flex-flow: column nowrap;
    background-color: #ffe184;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0; 
    height: 100vh;
    width:300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 15;

    li {
        color: white;
    }
    
    .dropdown {
        background-color: blue;
    }
    
    .dropdown:hover .dropbtn {
        background-color: blue;
    }
    
}

.dropbtn {
    background-color: rgb(56, 56, 56);

    padding: 16px;
color: white;
    border: none;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {background-color: #ddd;}

  .dropdown:hover .dropdown-content {display: block;}

  .dropdown:hover .dropbtn {background-color: rgb(56, 56, 56);

`


const NavMenu = ({ open }) => {





    return (

        <Ul open={open} className="nav-menu">
            <li ><Link to="/">HOME</Link></li>
            {/* <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/rates">RATES</Link></li> */}



            <div class="dropdown">
                <button class="dropbtn">INFORMATION</button>
                <div class="dropdown-content">
                    <Link to="/accomodations">Accomodations</Link>
                    <Link to="/rates"><a href="#">Rates</a></Link>
                    <Link to="/getthere"><a href="#">Private Air</a></Link>
                    <Link to="/about"><a href="#">About Us</a></Link>

                </div>
            </div>

            <li><Link to="/luxury-beach-house">LUXURY BEACH HOUSE</Link></li>
            {/* <li><Link to="/book"><button className="book-button">BOOK NOW</button></Link></li> */}

        </Ul>

    )
}


export default NavMenu