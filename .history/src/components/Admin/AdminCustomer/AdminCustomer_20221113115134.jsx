import React, { useEffect } from "react";
import AdminCustomerTable from "./AdminCustomerTable/AdminCustomerTable";
import "./AdminCustomer.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function AdminCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const loadData = async () => {
    // console.log("calling admin api customer");
    // const resAllCustomer = await APIAdminCustomer();

    // const updateCustomerAction = adminActions.updateCustomer(
    //   resAllCustomer.data
    // );

    // dispatch(updateCustomerAction);
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("role") === "ROLE_ADMIN") {
      if (customerList.length <= 0) loadData();
    } else if (window.sessionStorage.getItem("role") === "ROLE_USER")
      navigate("/");
    else navigate("/login");
  }, []);

  return (
    <div className="adminCustomer">
      <div className="adminContainer">
        <AdminCustomerTable />
      </div>
    </div>
  );
}
