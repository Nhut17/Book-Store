import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";


function Product({data,stt}) {

  return (
    <tr>
      <td w>{stt + 1}</td>
      <td>
        <div className="image">
          <img src={data.proImage}></img>
        </div>
      </td>
      <td>{data.proName}</td>
      <td>{data.proPrice}</td>
      <td>{data.category}</td>
      <td>{data.author}</td>
      <td>{data.proQuantity}</td>
      <td>{data.proSale}</td>
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
