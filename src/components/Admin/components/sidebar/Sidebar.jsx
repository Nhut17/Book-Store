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
  LogoutOutlined,
  BookOutlined

} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../../redux/reducer/userSlice";
import logo from '../../../../assets/images/Home/logo.png'



function Sidebar(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logoutAdmin())
    localStorage.clear()
    navigate('/')
    navigate(0)
  }


  return (
    <>
      <div className="sidebar">
        <div className="sidebar-top">
          <img src={logo} style={{ paddingLeft: 20 }} />
          {/* <h4 style={{color: '#0a6f3c'}}>VNBOOK</h4> */}
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
              <BookOutlined></BookOutlined>
            </span>
            <p>
              Danh mục

            </p>
          </Link>


          <div className="sidebar-list-item" onClick={handleLogout}>
            <span >
              <LogoutOutlined />
            </span>
            <p>
              Đăng xuất

            </p>
          </div>


        </div>
      </div>


    </>
  );
}

export default Sidebar;
