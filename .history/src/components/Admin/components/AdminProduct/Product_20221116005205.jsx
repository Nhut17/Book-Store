import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   DeleteProduct,
//   paginationProduct,
// } from "../../../../actions/ProductAction";
import { useHistory, Link } from "react-router-dom";

import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";


function Product(props) {

  return (
    <tr>
      <td w>1</td>
      <td>
        <img src='https://res.cloudinary.com/dx8xengfd/image/upload/v1667458148/avatars/iPhone_14_Pro_Max-Pur1_sfdzzu.jpg'></img>
      </td>
      <td>{'product.name'}</td>
      <td>10000</td>
      <td>Danh mục</td>
      <td>Loại</td>
      <td>100</td>
      <td>20</td>
      <td>20</td>

      <td
        className="delete-product"
       
      >
        <DeleteOutlined />
      </td>
      <td className="update-product">
        <Link to={`/admin/product/update/${'product._id'}`}>
          <EditOutlined></EditOutlined>
        </Link>
      </td>
      <td className="review-product">
        <Link to={`/admin/product/reviewProduct/${'product._id'}`} >
          <FormOutlined></FormOutlined>
        </Link>
      </td>
    </tr>
  );
}

export default Product;