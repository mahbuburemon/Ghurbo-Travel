import React, { useEffect, useState } from 'react';
import TourPackages from '../Tour-Packages/TourPackages';
import './Destination.css'

const Destination = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/tourpackage')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return (
        <div className=" body ">

            <h2 id="packages" className="p-5 fw-bold">Our Tour Destination</h2>

            <div className=" p-4 row row-cols-12 row-cols-md-6 row-cols-lg-3 g-4">
                {
                    packages.map(service => <TourPackages
                        key={service._id}
                        service={service}
                    ></TourPackages>)
                }
            </div>
        </div>
    );
};

export default Destination;