import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { ToastContainer, toast } from 'react-toastify';

import { LoginContext } from '../context/loginContext'
import 'react-responsive-modal/styles.css';


const Layout = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [layoutModal, setLayoutModal] = useState()
  const [showSignUp, setShowSignUp] = useState(false)

  useEffect(() => {
    
  },[showLogin])
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
              <Router />
            </LoginContext.Provider>


            <Footer />
          </div>
      
      
      
    </BrowserRouter>


  );
};

export default Layout;
