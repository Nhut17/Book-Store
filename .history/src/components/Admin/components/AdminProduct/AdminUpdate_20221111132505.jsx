import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function AdminUpdate(props) {
  const { register, handleSubmit } = useForm();
 
  const history = useHistory();

  
  const onSubmit = async (data) => {
  

  //   await dispatch(saveProduct(formData));
    history.push("/admin/product");
  };

  // const MenuFirmProduct = (item) => (
  //   <div
  //     className={
  //       activeTypeProduct
  //         ? activeTypeProduct === item.name
  //           ? `filter-menu-firm-item active`
  //           : "filter-menu-firm-item"
  //         : detailProduct.type === item.name
  //         ? `filter-menu-firm-item active`
  //         : "filter-menu-firm-item"
  //     }
  //     onClick={() => HandleFilterProductByType(item.name)}
  //   >
  //     <img src={item.img}></img>
  //   </div>
  // );

  // const HandleFilterProductByType = (name) => {
  //   setActiveTypeproduct(name);
  // };

  let detailProduct = true;

  return (
    <div className="admin-create">
      <span>Update Product</span>
      {detailProduct ? (
        <form
          className="admin-create-product"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <input
            {...register("name")}
            placeholder="Name"
            defaultValue={detailProduct.name}
          ></input>
          <input
            {...register("amount")}
            placeholder="Amount"
            type="number"
            defaultValue={detailProduct.amount}
          ></input>
          <input
            {...register("price")}
            placeholder="Price"
            type="number"
            defaultValue={detailProduct.price}
          ></input>
          <input
            {...register("salePrice")}
            placeholder="SalePrice"
            type="number"
            defaultValue={detailProduct.salePrice}
          ></input>

          {/* <div className="filter-menu-firm">
          {
            List ? (List.map((item) => MenuFirmProduct(item))) : ''
          }
          </div> */}

          <div className="select-type">
                  <select
                    {...register(`${'item.property'}`)}
                    defaultValue={detailProduct[`${'item.property'}`]}
                  >
                    {/* {item.options.map((x) => (
                      <option value={x}>{x}</option>
                    ))} */}

                    <option value={'x'}>{'x'}</option>
                  </select>
                </div>

          <input
            type="file"
            {...register("image")}
           
          ></input>
          <button type="submit">Update Product</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminUpdate;
