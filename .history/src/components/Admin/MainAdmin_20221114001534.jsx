import React from "react";
import { useSelector } from "react-redux";
import "./MainAdmin.css";
import Routess from './components/Routess'
import Sidebar from "./components/sidebar/Sidebar";
// import Routes from "../../routes/Routes";

function MainAdmin (props) {
  
  return (
    

    <div className="main-admin">
            
            <Sidebar />

            <div className="layout__content">
              <div className="layout__content-main">
                  <Routess/>
              </div>
            </div>
        

      
  </div>
    
  );
}

export default MainAdmin;
