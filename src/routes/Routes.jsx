import React from 'react'
import {  Route, Switch } from "react-router-dom";

import Home from '../pages/Home.jsx';
import SignIn from '../pages/SignIn.jsx';
import SignUp from '../pages/SignUp.jsx';

const Routes = () => {
  return (
   <Switch>

      {/* HOME */}
      <Route path="/" exact component={Home} />
    
      {/* SIGN IN */}
      <Route path="/dang-nhap" exact component={SignIn} />
    
      {/* SIGN UP */}
      <Route path="/dang-ky" exact component={SignUp} />
    
      
   </Switch>
  );
};

export default Routes
