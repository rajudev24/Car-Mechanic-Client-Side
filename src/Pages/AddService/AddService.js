import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://sheltered-anchorage-53897.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        })
    };

    return (
        <div className='add-service'>
            <h2>Add Your Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}placeholder='Name' />
                <textarea {...register("description")} placeholder='Description' />
                <input type="number" {...register("price")}placeholder='price' />
                <input {...register("image")} placeholder='image url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;