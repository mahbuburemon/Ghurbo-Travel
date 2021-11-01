import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/b1.jpg'
import banner2 from '../../../images/Banner/b2.jpg'




const Banner = () => {
    return (
        <div>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: "orangered" }} className="fw-bold fs-1">Enjoy the tour with
                                ghurbo</h3>
                            <p>We provide travelers with an authentic Jordanian experience that they
                                can remember for the rest of their lives</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="fw-bold fs-1 text-white">Find your next tour
                            </h3>
                            <p>Where would you like to go?</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;