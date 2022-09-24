import React, { useState } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";
import Login from "../pages/Login";
import { LoginContext } from '../context/loginContext'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Layout = () => {
  const [showLogin, setShowLogin] = useState()
  const [layoutModal, setLayoutModal] = useState()

  console.log(showLogin)
  return (

    <BrowserRouter>

      <Route
        render={(props) => (
          <div className="layout">

            {
              showLogin && <Login setShowLogin={setShowLogin} />
            }


            <LoginContext.Provider value={[showLogin, setShowLogin, setLayoutModal]}>

              <Header />

            </LoginContext.Provider>


            <Routes />


            <Footer />
          </div>
        )}
      />
    </BrowserRouter>


  );
};

export default Layout;
