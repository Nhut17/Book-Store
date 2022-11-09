import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Router from "../routes/Router";
import Footer from "./Footer";
import Header from "./Header";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/loginContext'
import 'react-responsive-modal/styles.css';
import { useSelector } from "react-redux";


const Layout = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [layoutModal, setLayoutModal] = useState()
  const [showSignUp, setShowSignUp] = useState(false)
  const user = useSelector(state => state.user)

  useEffect(() => {
    if(user.success)
    {

      toast(`Chào mừng ${user.user.name}`, 
      {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  }
  },[user.success])
  return (

    <BrowserRouter>
      {
          user.success &&  
          <ToastContainer />
      }
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
