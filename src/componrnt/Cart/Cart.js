import React from 'react';
import '././Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    
    const tax = (total / 10).toFixed(2);

    let delivary = 0;
    if(total > 50){
        delivary = 0;
    }
    else if(total >25){
        delivary = 5.99;
    }
    else if(total >0){
        delivary =11.98;
    }
    
    const totals = (total + Number(tax) + delivary).toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items order:{cart.length}</p>
            <p><smal>VAT + Tax: {tax}</smal></p>
            <p><smal>Delivary Cost: {delivary}</smal></p>
            <p>total price:{totals}</p>
        </div>
    );
};

export default Cart;