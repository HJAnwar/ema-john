import React, { useState } from 'react';
import './App.css';
import Headar from './componrnt/Headar';
import Shop from './componrnt/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './componrnt/Review/Review';
import Inventory from './componrnt/Inventory/Inventory';
import NotFount from './componrnt/NotFount/NotFount';
import ProductDetail from './componrnt/ProductDetail/ProductDetail';
import Login from './componrnt/Login/Login';
import Shipment from './componrnt/Shipmen/Shipment';
import { createContext } from 'react';
import PrivateRoute from './componrnt/PrivateRoute/PrivateRoute';


export const UserContext = createContext();


function App(props) {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (

    <UserContext.Provider  value = {[loggedInUser, setLoggedInUser]} >
      <h2>email: {loggedInUser.email}</h2>
     
      <Router>
      <Headar></Headar>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <PrivateRoute path='/inventory'>
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/shipmen'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route exact path='/'>
            <Shop></Shop>
          </Route>
          <Route path='/product/:productKey'>
            <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
            <NotFount></NotFount>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
