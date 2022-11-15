import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   paginationProduct,
// } from "../../../../actions/ProductAction";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";


function AdminProduct(props) {
 
  let products = true

  return (
    <div className="admin-product">
      <div className="admin-product-link">
        {/* <Link to="/admin/product/create" className="add-product">
          <AppstoreAddOutlined />
        </Link>
        <Link to="/admin/product/update/info" className="add-product">
          <ToolOutlined></ToolOutlined>
        </Link> */}
        <Link to="/admin/product/create"> 
          <button >
            + Add Product
          </button>
        </Link>
      </div>
      
      {products ? (
        <ListProduct ></ListProduct>
      ) : (
        "Loading"
      )}
    </div>
  );
}

export default AdminProduct;
