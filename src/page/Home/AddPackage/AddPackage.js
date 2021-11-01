import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:7000/tourPackage', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();

                }
            })
    }
    return (
        <div className="add-package">
            <h2>Please Added Tour Packages</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Name" required />
                <textarea {...register("description")} placeholder="Description" required />
                <input {...register("days")} placeholder="days" />
                <input type="number" {...register("fee")} placeholder="Fee" required />
                <input {...register("img")} placeholder="Image-Url" required />
                <input className="bg-danger border-2 border-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddPackage;