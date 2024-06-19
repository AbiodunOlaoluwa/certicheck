import React from 'react';
import bgImage from "../../mainContentBG.avif";
import Footer from '../../Components/NavBar/Footer/Footer';
import "./LandingPage.css";
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landingPageContainer">
            <div className="mainContentContainer">
                <div className="imageContainer">
                    <img className="bgImage" src={bgImage} alt="bg_Image" />
                </div>
                <div className="contentContainer">
                    <div className="textContainer">
                        <h1 className="titleText">
                            Welcome to CertiCheck
                        </h1>
                        <h4 className="subText">
                            CertiCheck simplifies the process of verifying academic certificates, ensuring authenticity and security through the application of blockchain technology. Whether you're an institution or a student, our platform offers a seamless and efficient verification experience.
                        </h4>
                    </div>
                    <div className="buttonsContainer">
                        <Link to={"/institutionlogin"}><button className="institutionLogin">Login as Institution</button></Link>
                        <Link to={"/studentlogin"}><button className="studentLogin">Login as Student</button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage