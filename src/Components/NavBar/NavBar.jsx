import React from 'react';
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navBarContainer">
        <div className="titleLogoContainer"><Link to={"/"} ><p className="titleLogoText">CertiCheck</p></Link></div>
        <div className="navLinksContainer">
            <div className="navLinks">
                <ul className="navLinksList">
                    <li className="linksTexts"><Link to={"/"} >Home</Link></li>
                    <li className="linksTexts">How It Works</li>
                    <li className="linksTexts">About</li>
                </ul>
            </div>
        </div>
        <div className="verifyCertificateButtonContainer">
            <Link><button className="verifyCertificateButton">Verify Certificate</button></Link>
        </div>
    </div>
  )
}

export default NavBar