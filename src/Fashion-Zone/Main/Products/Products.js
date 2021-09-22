import React from 'react';
import "./Products.css"

const Products = (props) => {
    const {title,category,price,image,rating} = props.product
    return (
        <div className="text-center">
      
    <div className="my-4 shadow-sm bg-white rounded-3">
    <div className="single-product">
        <img width="200px" height="200px" src={image} alt="" />
        <div className="card-body">
        <h5>{title.slice(0,25)}</h5>
        <p>Category: {category}</p>
        <h2>Price : ${price}</h2>
        <p>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="far fa-star text-warning"></i>
              <span className="rating">{rating.rate}</span>
      </p>
      <p><span className="fw-bold">{rating.count}</span> Person Rated</p>
      <button className="btn btn-info text-white">ADD TO CART</button>
      <button className="btn btn-outline-info ms-2">DETAILS</button>

    </div>
    </div>
    </div> 
        </div>
    );
};

export default Products;