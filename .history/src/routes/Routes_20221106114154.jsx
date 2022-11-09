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
      <Route path="/" exact element={<Home />} />


      {/* SIGN IN */}
      <Route path="/dang-nhap" exact element={<SignIn />} />

      {/* SIGN UP */}
      <Route path="/dang-ky" exact element={<} /><

      <Route path="/sach-ban-chay" exact element={<} />

      <Route path="/product-detail" exact element={<} />

      <Route path="/check-out" exact element={<} />
      <Route path="/pay-for-order" exact element={<} />

      <Route path="/profile" exact element={<} />

    </Switch>

  );
};

export default Routes
