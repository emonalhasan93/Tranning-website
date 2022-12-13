import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
        <div>
           <h2 className='text-center text-info -200 fw-bold'>My Services</h2>
           <div className='services-container w-75 mx-auto'>
           {
               services.map(service=><Service key={service._id} service={service}></Service>)
           }
           </div>
       
        </div>
    );
};

export default Services;