import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faEnvelope} />
    const element2 = <FontAwesomeIcon icon={faMobile} />
    const element3 = <FontAwesomeIcon icon={faLocationArrow} />
    return (
        <>
            <div className="footer-all " collapseOnSelect expand="lg" >
                <div className=" footer bg-dark text-white p-5" >
                    <div className="row ">
                        <div className="col-md-4">
                            <h2 className="footer-head fs-2">GhurboTravel Agency</h2>
                            <div className="footer-p text-center">
                                <p className="p-2">Travel" is definitely one of the things that people like to do. It will soon take place on our list of basic needs; Although many of them are at the top of that list. No one wants to get away from the hustle and bustle of the city, the jingle of instruments and the busyness and breathe a sigh of relief. If you are a traveler; Then human stress and anxiety will never touch you.</p>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">About GhurboTravel</h2>

                            <div className="footer-p p-2">
                                <ul>
                                    <li>About Us</li>
                                    <li>Our Team</li>
                                    <li>Careers </li>
                                    <li>Services </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <h2 className="footer-head fs-3">Contact Info</h2>
                            <div className="footer-p  text-start p-2">
                                <p><span className="contact-info">{element1} </span> mahbuburemon60@gmail.com</p>
                                <p> <span className="contact-info">{element2} </span> 01516762425</p>
                                <p> <span className="contact-info">{element3} </span> S/K Mannan road,Tongi-Gazipur</p>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <hr />
                            <h6 className="mt-3 p-2 text-center text-secondary ">Copyright © 2021 Mahbubur Rahman. All Rights Reserved.</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Footer;