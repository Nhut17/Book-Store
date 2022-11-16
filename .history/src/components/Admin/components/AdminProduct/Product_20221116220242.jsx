import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import { DeleteOutlined, EditOutlined, FormOutlined } from "@ant-design/icons";
import { deleteProduct } from "../../../../redux/reducer/productSlice";


function Product({data,stt}) {

  const dispatch = useDispatch()

  const handleDelete = () => {
    console.log('delete')
    dispatch(deleteProduct(data.id))

  }

  return (
    <tr>
      <td w>{stt + 1}</td>
      <td style={{paddingLeft: 70}}>
        <div className="image">
          <img src={data.proImage}></img>
        </div>
      </td>
      <td>{data.proName}</td>
      <td>{data.proPrice?.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span className='currency' style={{fontSize: 12}}>&#8363;</span></td>
      <td>{data.category}</td>
      <td>{data.author}</td>
      <td>{data.proQuantity}</td>
      <td>{data.proSale}</td>
      <td>20</td>

 
      <div
        className="delete-product"
        onClick={handleDelete}
      >
       <td style={{paddingTop: 30}}>
        <DeleteOutlined />
       </td>
        
      </div>
      {/* <td className="update-product">
        <Link to={`/admin/product/update/${'product._id'}`}>
          <EditOutlined></EditOutlined>
        </Link>
      </td>
      <td className="review-product">
        <Link to={`/admin/product/reviewProduct/${'product._id'}`} >
          <FormOutlined></FormOutlined>
        </Link>
      </td> */}
    </tr>
  );
}

export default Product;
