import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Products from './Products/Products';

const Main = () => {

const [products,setProducts]= useState([])
const [cart,setCart] = useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProducts(data))
},[])

const AddToCart = product => {
    setCart([...cart,product])
}

    return (
           <div className="row row-cols-1 row-cols-md-3 row-lg-4 g-4 d-flex justify-content-center">

                <div className="col col-9 col-md-9 col-lg-9">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                        products.map(product => <Products
                         key={product.id}
                        product={product}
                        AddToCart = {AddToCart}
                        />)
                }
                </div>
                </div>

                <div className="col col-10 col-md-3 col-lg-3">
                    <Cart cart={cart}/>
                </div>

          </div>
    );
};

export default Main;