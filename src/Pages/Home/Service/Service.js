import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name,picture,Description,price}=service;
    return (
        <div className='service'>
            <img style={{height:'150px', width:'335px'}} className='' src={picture}alt="" />
            <h2>{name}</h2>
            <p><small>{Description}</small></p>
            <p>{price}</p>
            <button className='mb-3 rounded-pill btn btn-primary text-white w-50 p-2'>Checkout</button>
        </div>
    );
};

export default Service;