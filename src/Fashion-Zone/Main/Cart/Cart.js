import React from 'react';
import "./Cart.css"

const Cart = () => {
    return (
        <div>
          
          <div className="cart bg-white p-3 shadow-sm rounded-3 mt-4 shoping-cart" id="my-cart">
          <h1>My-Cart</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Total Added-Products:</th>
                <td><i className="fas fa-cart-plus"> </i> <span id="total-Products"> 0</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Price:</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price">0</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Delivery-Charge:</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="delivery-charge">20</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Total-Tax:</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="total-tax">0</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="total">0</span></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="parces text-center">
            <button className="btn btn-primary text-center">Buy Now</button>
          </div>
        </div>

        </div>
    );
};

export default Cart;