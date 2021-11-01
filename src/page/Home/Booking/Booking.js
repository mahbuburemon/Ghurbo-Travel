import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../../utilities/fakedb';
import './Booking.css'

const Booking = () => {
    const { bookingId } = useParams()
    const [packageDetails, setPackageDetails] = useState([]);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    // dataload
    useEffect(() => {
        fetch(`http://localhost:7000/tourpackage/${bookingId}`)
            .then(res => res.json())
            .then(data => setPackageDetails(data))
    }, [])

    // submission client data
    const onSubmit = data => {

        const saveCard = getStoredCart()
        data.booking = saveCard;
        fetch('http://localhost:7000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking Processed Successfully')
                    clearTheCart();
                    reset();
                }

            })
    }




    return (
        <div className="container ">
            <div className=" row gx-2 row-cols-md-2 row-cols-lg-2 row-cols-sm-1 servicesDetails">
                <div className="col col-md-12 col-lg-6" >

                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className=" m-2 p-2 fw-bold">Booking Confirmation Form</h3>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />

                        {/* include validation with required or other standard HTML validation rules */}
                        <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                        {/* errors will return when field validation fails  */}
                        {errors.email && <span className="error">email is required</span>}

                        <input placeholder="Address" defaultValue="" {...register("address")} required />
                        <input placeholder="City/Town" defaultValue="" {...register("city")} required />
                        <input placeholder="Phone" defaultValue="" {...register("phone")} required />
                        <input className="bg-danger" type="submit" />
                    </form>

                </div>
                <div className="col col-md-12 col-lg-6">
                    <h2>{packageDetails.name}</h2>

                    <img className="p-3" style={{ height: "260px", width: "450px" }} src={packageDetails.img} alt="" />

                    <p>{packageDetails.description}</p>
                    <p><span className="fw-bold">Days: </span> {packageDetails.days}</p>
                    <p><span className="fw-bold">Amount: </span> {packageDetails.fee}</p>
                </div>



            </div>
            <h5 className="text-secondary p-3">Hopefully you enjoy with us.So Confirm early as possible,Thank you</h5>
        </div>
    );
};

export default Booking;