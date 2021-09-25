import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Cart from './Cart/Cart';
import Details from './Details/Details';
import Products from './Products/Products';

const Main = () => {

const [products,setProducts]= useState([])
const [cart,setCart] = useState([])
const [details,setDetails] = useState([])
const [displayProduct, setDisplayProduct] = useState([]);

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        setDisplayProduct(data)
        setProducts(data)})
},[])

const AddToCart = product => {
    setCart([...cart,product])
}

const AddToDetails = (product) => {
    setDetails([...details,product])
}

const searchProduct = event => {
    const search = event.target.value;
    const matchProduct = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    setDisplayProduct(matchProduct);
}

    return (
<div>
    <Header searchProduct={searchProduct}/>
             <div className="text-center mb-5 mt-3">
             <h4>Total Product Found :  <span className="text-primary"> {displayProduct.length }</span></h4>
             </div>
    {
        details.map(detail => <Details
            key={detail.id}
             detail={detail}
            />)
    }
            
           <div className="row row-cols-1 row-cols-md-3 row-lg-4 g-4 d-flex justify-content-center">

                <div className="col col-9 col-md-9 col-lg-9">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                        displayProduct.map(product => <Products
                        key={product.id}
                        product={product}
                        AddToCart = {AddToCart}
                        AddToDetails = {AddToDetails}
                        />)
                }
                </div>
                </div>

                <div className="col col-10 col-md-3 col-lg-3">
                    <Cart cart={cart}/>
                </div>

</div>
          </div>
    );
};

export default Main;