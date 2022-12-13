import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h2 className='text-center text-info mt-4'>Welcome to Service detail</h2>
           <div className='text-center'>
               <Link to='/checkout'>
                   <button className='btn btn-info'>Checkout Services</button>
               </Link>
           </div>
        </div>
    );
};

export default ServiceDetail;