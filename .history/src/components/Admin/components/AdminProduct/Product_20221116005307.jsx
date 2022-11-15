import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";


function Product({data}) {

  return (
    <tr>
      <td w>1</td>
      <td>
        <div className="image">
          <img src={data.proImage}></img>
        </div>
      </td>
      <td>{data.proName}</td>
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