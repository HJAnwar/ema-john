import React from 'react';
import logo from '../images/logo.png';
import './Headar.css'

const Headar = () => {
    return (
        <div className='headar'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/orderreview">Order Review</a>
                <a href="manage">Manage you ordeer</a>
            </nav>
        </div>
    );
};

export default Headar;