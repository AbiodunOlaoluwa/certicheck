import React from 'react';
import { Link } from 'react-router-dom';
import igImage from "../../../instagram.png";
import twitterImg from "../../../twitter.png";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerContent">
                <div className="titleLogoContainer"><p className="titleLogoText">CertiCheck</p></div>
                <div className="footerLinks">
                    <div className="navLinksContainer">
                        <div className="navLinks">
                            <ul className="navLinksList">
                                <li className="linksTexts"><Link to={"/"} >Home</Link></li>
                                <li className="linksTexts">How It Works</li>
                                <li className="linksTexts">About</li>
                                <li className="linksTexts">Privacy Policy</li>
                                <li className="linksTexts">Terms of Use</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <a href="https://instagram.com" className="socialsHyperLinks"><img src={igImage} alt="instagram" className="socialsLogo" /></a>
                    <a href="https://x.com" className="socialsHyperLinks"><img src={twitterImg} alt="twitter" className="socialsLogo" /></a>
                </div>
            </div>
            <div className="copyrightContainer">
                <p className="copyrightText">&copy; Copyright CertiCheck 2024</p>
            </div>
        </div>
    )
}

export default Footer