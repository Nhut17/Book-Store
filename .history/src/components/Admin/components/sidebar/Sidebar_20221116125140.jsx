import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllOrderPendding } from "../../../../actions/OrderAction";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import {
  AppstoreOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  OrderedListOutlined,
  WechatOutlined,
} from "@ant-design/icons";


function Sidebar(props) {
 
  

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
              {/* <div className="admin-order-new">
                  10
                </div> */}
            </p>
          </Link>
          {/* <Link to="/admin/chat" className={location.pathname === '/admin/chat' ? 'sidebar-list-item active': 'sidebar-list-item'}>
            <span>
              <WechatOutlined></WechatOutlined>
            </span>
            <p>Chat</p>
          </Link> */}
        </div>
      </div>

      
    </>
  );
}

export default Sidebar;