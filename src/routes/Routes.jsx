import React from 'react'
import {  Route, Switch } from "react-router-dom";


import Home from '../pages/Home.jsx';

import Login from '../pages/Login.jsx';

const Routes = () => {
  return (
   <Switch>

      {/* HOME */}
      <Route path="/" exact component={Home} />
     
      
      {/* <Route path="/dang-nhap" exact component={Login} /> */}
    
      {/* SIGN UP */}
      {/* <Route path="/dang-ky" exact component={SignUp} /> */}
    
      
   </Switch>
  );
};

export default Routes
