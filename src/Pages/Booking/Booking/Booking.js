import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(()=>{
        fetch(`https://sheltered-anchorage-53897.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div>
            <img src={service.img} alt="" />
            <h4>Service Name {service.name} </h4>
            <h3>Service Fee: ${service.price} </h3>
            <p>Service Details {service.description} </p>
        </div>
    );
};

export default Booking;