import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  WechatOutlined,
  ProfileOutlined,
  LogoutOutlined

} from "@ant-design/icons";



function Sidebar(props) {
 
  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.clear()
    navigate('/')
    navigate(0)
  }
  

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          {/* <img src={logo}></img> */}
          <h4>LATATA</h4>
        </div>
        <div className="sidebar-list">
          <Link to="/admin" className={'sidebar-list-item'}>
            <span>
              <AppstoreOutlined></AppstoreOutlined>
            </span>
            <p>Trang chủ</p>
          </Link>
          <Link to="/admin/customer" className={'sidebar-list-item'}>
            <span>
              <UsergroupAddOutlined></UsergroupAddOutlined>
            </span>
            <p>Người dùng</p>
          </Link>

          <Link to="/admin/product" className={'sidebar-list-item'}>
            <span>
              <ShopOutlined></ShopOutlined>
            </span>
            <p>Sản phẩm</p>
          </Link>

          <Link to="/admin/order" className={'sidebar-list-item'}>
            <span>
              <OrderedListOutlined></OrderedListOutlined>
            </span>
            <p>
              Đơn hàng
            
            </p>
          </Link>

          <Link to="/admin/category" className={'sidebar-list-item'}>
            <span>
              <ProfileOutlined></ProfileOutlined>
            </span>
            <p>
              Danh mục
            
            </p>  
          </Link>

          
          <Link>
            <span onClick={handleLogout}>
            <LogoutOutlined />
            </span>
            <p>
             Đăng xuất
            
            </p>  
        
          </Link>
         
        </div>
      </div>

      
    </>
  );
}

export default Sidebar;
