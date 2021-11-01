import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';


const Home = () => {
    return (
        <div>
            <p className="p-3 fw-bolder ">“Travel makes one modest, you see what a tiny place you occupy in the world.” ~ Gustave Flaubert</p>
            <Banner></Banner>
            <Destination></Destination>
        </div>
    );
};

export default Home;