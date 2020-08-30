import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import '././Shop.css';


const Shop = () => {
const first10 =fakeData.slice(0, 10);
const [products, setproducts] = useState(first10);

const [cart, setCart ]=useState([]);

const hendleAddProduct = (product) => {
    const newProduct =[...cart, product]
    setCart(newProduct);
}

    return (
        <div className='shop-container'>
            <div className='product-container'>
              {
                products.map(prod => <Product product={prod} hendleAddProduct={hendleAddProduct}></Product>)
              }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;