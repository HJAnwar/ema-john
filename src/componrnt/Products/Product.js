import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '././Product.css';

const Product = (props) => {
    const {name, img, price,seller, stock} = props.product;
    const hendleAddProduct = props.hendleAddProduct;
    
    return (
        <div className='products-container'>
            <div className='img-container'>
                <img src={img} alt=""/>
            </div>
            <div className='title-container'>
                <h3>{name}</h3>
                <br/>
                <p><smal>by:{seller}</smal></p>
                <p>$:{price}</p>
                <p><smal>Only {stock} left in - Order soon</smal></p>
                <button className='btn-color' onClick={() => hendleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}   /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;