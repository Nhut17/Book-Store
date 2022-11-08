import React from 'react'
import { Route, Switch  } from "react-router-dom";


import Home from '../pages/Home.jsx';

import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import BestSelling from '../pages/BestSelling.jsx';

import ProductDetail from '../components/ProductDetail/ProductDetail.jsx';
import CheckOut from '../pages/CheckOut.jsx';

import PayForOrder from '../pages/PayForOrder.jsx';

import InfoProfile from '../pages/InfoProfile.jsx';
// import  CheckOut from 
const Routes = () => {
  return (
    <Switch>

      {/* HOME */}
      <Route path="/" >
        <Home />
      </Route>


    

      <Route path="/sach-ban-chay">
        
        </Route>

      <Route path="/product-detail"  element={<ProductDetail />} />

      <Route path="/check-out"  element={<CheckOut />} />
      <Route path="/pay-for-order"  element={<PayForOrder />} />

      <Route path="/profile"  element={<InfoProfile />} />

    </Switch>

  );
};

export default Routes
