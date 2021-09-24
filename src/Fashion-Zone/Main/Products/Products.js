import React from 'react';
import Rating from 'react-rating';
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

        <Rating
        initialRating={rating.rate}
        readonly
        emptySymbol="far fa-star text-warning"
        fullSymbol="fas fa-star text-warning"
        />
        <span className="rating">{rating.rate}</span>

      <p className="mt-3"><span className="fw-bold">{rating.count}</span> Person Rated</p>
      <button onClick={() => props.AddToCart(props.product)} className="btn btn-info text-white">ADD TO CART</button>
      <button className="btn btn-outline-info ms-2">DETAILS</button>

    </div>
    </div>
    </div> 
        </div>
    );
};

export default Products;