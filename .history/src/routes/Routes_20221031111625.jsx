import React from 'react'
import { Route, Switch } from "react-router-dom";


import Home from '../pages/Home.jsx';

import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';
import BestSelling from '../pages/BestSelling.jsx';

import ProductDetail from '../components/ProductDetail/ProductDetail.jsx';
import CheckOut from '../pages/CheckOut.jsx';
import Breadcrumb from '../components/MainProduct/Breadcrumb.jsx';
// import  CheckOut from 
const Routes = () => {
  return (
    <Switch>

      {/* HOME */}
      <Route path="/" exact component={Home} />


      {/* SIGN IN */}
      <Route path="/dang-nhap" exact component={SignIn} />

      {/* SIGN UP */}
      <Route path="/dang-ky" exact component={SignUp} />

      <Route path="/sach-ban-chay" exact component={BestSelling} />

      <Route path="/product-detail" exact component={ProductDetail} />

      <Route path="/check-out" exact component={CheckOut} />
      <Route path="/check-out" exact component={CheckOut} />







    </Switch>

  );
};

export default Routes
