import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '././Product.css';
import { Link } from 'react-router-dom';


const Product = (props) => {
    console.log(props);
    const {name, img, price, seller, stock, key} = props.product;
    const hendleAddProduct = props.hendleAddProduct;
    
    
    return (
        <div className='products-container'>
            <div className='img-container'>
                <img src={img} alt=""/>
            </div>
            <div className='title-container'>
                <h4 className="color"><Link to={"/product/"+key}>{name}</Link> </h4>
                <br/>
                <p><smal>by:{seller}</smal></p>
                <p>$:{price}</p>
                <p><smal>Only {stock} left in - Order soon</smal></p>
                {props.showAddToCart && <button className="btn-color"
                    onClick={() => hendleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart}   /> Add to Cart
                </button>}
            </div>
        </div>
    );
};

export default Product;