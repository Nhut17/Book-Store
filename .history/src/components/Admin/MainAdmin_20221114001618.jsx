import React from "react";
import { useSelector } from "react-redux";
import "./MainAdmin.css";
import { BrowserRouter as Ro, Route } from "react-router-dom";
import Routess from './components/Routess'
import Sidebar from "./components/sidebar/Sidebar";
// import Routes from "../../routes/Routes";

function MainAdmin (props) {
  
  return (
    

    <BrowserRouter>
            
            <Sidebar />

            <div className="layout__content">
              <div className="layout__content-main">
                  {/* <Routess/> */}
              </div>
            </div>
        

      
  </BrowserRouter>
    
  );
}

export default MainAdmin;