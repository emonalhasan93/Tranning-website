import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const{name,img,price}=product
    return (
        <div className="card products" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}.</p>
          <a href="#" className="btn btn-primary">Choose</a>
        </div>
      </div>
    );
};

export default Product;