import React from 'react';
import "./Cart.css"

const Cart = (props) => {
  const {cart} = props

  const priceTotal = (previous,current) => previous + current.price;
  const price = cart.reduce( priceTotal , 0);
  const delevaryCharge = 20;
  const tax = price * 0.05;

  let grandTotal = price + delevaryCharge + tax;

const discount = () => {
  const usePromo = prompt('Enter Promo Code')

  if(usePromo === null){
  alert('You Have Lost Discount');
  }
  else if (usePromo === 'erfanbro'){
    alert('Promo Add Successful')
  }
  else{
    alert('Enter Valid Promo Code')
  }
}
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
                <td><i className="fas fa-cart-plus"> </i> <span id="total-Products"> {cart.length}</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Price:</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="price">  {price.toFixed(2)}</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Delivery-Charge:</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="delivery-charge"> {delevaryCharge}</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th>Total-Tax:</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="total-tax">{tax.toFixed(2)}</span></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">Total</th>
                <td><i className="fas fa-dollar-sign"></i> <span id="total"> {grandTotal.toFixed(2)}</span></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <div className="parces text-center">
            <button onClick={discount} className="btn btn-primary text-center">Buy Now</button>
          </div>
        </div>

        </div>
    );
};

export default Cart;