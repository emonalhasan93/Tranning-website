import React from 'react';
import proucts1 from '../../../../Images/p1.jpg';
import proucts2 from '../../../../Images/p2.jpg';
import proucts3 from '../../../../Images/p3.jpg';
import Product from '../Product/Product';

const Products = () => {
    const products=[
        {id:1,name:'incline bench',price:'$2000',img:proucts1},
        {id:2,name:'Ab rollercoster',price:'$1500',img:proucts2},
        {id:3,name:'Workout Gear',price:'$1000',img:proucts3},
    ]
    return (
        <div className='  me-5 mt-5 gx-5  gy-5'>
            <h2 className='text-center text-info -200 fw-bold ms-5'>My Gym Products</h2>
            <div className='row g-5'>
                {
                    products.map(product=> <Product key={product.id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;