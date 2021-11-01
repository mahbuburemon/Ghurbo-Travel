import React from 'react';
import { Link } from 'react-router-dom';
import './TourPackage.css'

const TourPackages = (props) => {
    const { _id, name, description, days, fee, img } = props.service
    return (
        <div>
            <div className="service">
                <div className="col package">
                    <div className="card">
                        <img style={{ width: '100%', height: '200px' }} src={img} className="card-img-top " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><span className="border-2 fw-bold ">Days: </span> {days}</p>
                            <p className="card-text"><span className="border-2 fw-bold ">Amount: </span> {fee}</p>

                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-info rounded-2"
                                >Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TourPackages;