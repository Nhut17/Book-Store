import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListProduct from "./ListProduct";
import "./AdminProduct.scss";
import { getAllProduct } from "../../../../redux/reducer/productSlice";


function AdminProduct(props) {

  const listProduct = useSelector(state => state.product.listProductAdmin)
  const dispatch = useDispatch()

  

  return (
    <div className="admin-product">
      <div className="admin-product-link">
       
        <Link to="/admin/product/create"> 
          <button >
            + Add Product
          </button>
        </Link>
      </div>
      
      {listProduct &&
        <ListProduct listProduct={listProduct} />
      }
      
    </div>
  );
}

export default AdminProduct;
