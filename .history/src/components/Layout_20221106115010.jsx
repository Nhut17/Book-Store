import React, { useState } from "react";

import { BrowserRouter, Router } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

import { LoginContext } from '../context/loginContext'
import 'react-responsive-modal/styles.css';


const Layout = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [layoutModal, setLayoutModal] = useState()
  const [showSignUp, setShowSignUp] = useState(false)
  return (

    <BrowserRouter>

   

          <div className="layout">
            {
              showLogin && <Login setShowLogin={setShowLogin} />
            }
            {
              showSignUp && <SignUp setShowSignUp={setShowSignUp} />
            }

            <LoginContext.Provider 
                        value={[showLogin, setShowLogin, setLayoutModal, setShowSignUp]}>
              <Header />
            </LoginContext.Provider>

            <Router />

            <Footer />
          </div>
      
      </Router>
      
    </BrowserRouter>


  );
};

export default Layout;
