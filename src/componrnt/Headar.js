import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import logo from '../images/logo.png';
import './Headar.css'

const Headar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='headar'>
            <img src={logo} alt=""/>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
               <button onClick={() => setLoggedInUser({})}>Sign-Out</button>
            </nav>
        </div>
    );
};

export default Headar;