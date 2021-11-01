import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const ManagePackage = () => {
    const { user } = useAuth();
    const { userId } = useParams();
    const [userDetails, setUserDetails] = useState([]);



    fetch(`http://localhost:7000/mybooking/${userId}`)
        .then(res => res.json())
        .then(data => setUserDetails(data))
    return (
        <div>
            <h2>manage all{user.email}</h2>
            <h2>manage all{user.displayName}</h2>


        </div>
    );
};

export default ManagePackage;