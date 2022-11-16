import React, { useEffect } from "react";
import {
  BellOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
  UsergroupDeleteOutlined,
  SkinOutlined,
} from "@ant-design/icons";
import "./DashBoard.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../../redux/reducer/userSlice";
import { getAllCategories } from "../../../../redux/reducer/categorySlice";

export default function DashBoard() {

  const listUser = useSelector(state => state.user.listUser)
  const listCate = useSelector(state => state.category.listCate)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUser())
  },[])

  useEffect(() => {
    dispatch(getAllCategories())
}, [])

  return (
    <section id="dashboard">
      <div className="dashboard">
        <div className="dashboard-top">
          
         
        </div>

        <div className="dashboard-middle">
          <div className="dashboard-middle-statistic">
            <div className="dashboard-middle-statistic-content" >
              <li style={{background : '#990000'}}>
                <div className="dashboard-middle-statistic-icon">
                  <UsergroupDeleteOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{listUser.length}</span>
                  <span className="title">Người dùng</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{background : '#2B7A0B'}}>
                <div className="dashboard-middle-statistic-icon">
                <DollarCircleOutlined/>

                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total"></span>
                  <span className="title">Sản phẩm</span>
                </div>
              </li>
            </div>

            <div className="dashboard-middle-statistic-content">
              <li style={{background : '#000957'}}>
                <div className="dashboard-middle-statistic-icon">
                  <SkinOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">{listCate.length}</span>
                  <span className="title">Danh mục</span>
                </div>
              </li>
            </div>
            <div className="dashboard-middle-statistic-content">
              <li style={{background : '#D4AC2B'}}>
                <div className="dashboard-middle-statistic-icon">
                  <ShoppingCartOutlined />
                </div>
                <div className="dashboard-middle-statistic-title">
                  <span className="total">2000</span>
                  <span className="title">Đơn hàng</span>
                </div>
              </li>
            </div>
            
          </div>
          {/* <ChartDashBoard></ChartDashBoard> */}
        </div>

       
      </div>
    </section>
  );
}
