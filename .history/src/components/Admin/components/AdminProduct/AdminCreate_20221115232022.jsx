import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../../../redux/reducer/categorySlice";

import ListSelect from "../../SubComponents/BoxSelect/ListSelect";

function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });

  const listCate = useSelector(state => state.category.listCate)
  const [cateClick,setCateClick] = useState(false)
  const cateRef = useRef()

  const createProduct = (formData) => {
    console.log(formData)
  }

  const handleOnClick = (e) =>{
    console.log(e.target)
  }

  return (
    <div className="admin-create">
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(createProduct)}
        encType="multipart/form-data"
      >

        <span>Tên sản phẩm</span>
        <input {...register("name")} placeholder=""></input>
      

        
        <div className="cate">

        <span>Danh mục</span>
        <input
          value={''}
          disabled={true}
          onClick={handleOnClick}
          {...register("category")}
          placeholder=""
          type="text"
          ></input>
          <i class="fa-solid fa-angle-down ic"></i>
          {
            cateClick &&
          <ListSelect listSelect={listCate} />
          }

        </div>

        <>
        <span>Tác giả</span>
        <input
          {...register("author")}
          placeholder=""
          type="text"
        ></input>
        </>

        <>
        <span>Giá</span>
        <input {...register("price")} placeholder="" type="number"></input>
        </>

        <>
        <span>Giảm giá</span>
        <input {...register("price")} placeholder="" type="number"></input>
        </>

        <>
        <span>Số lượng</span>
        <input {...register("quantity")} placeholder="" type="number"></input>
        </>

        <>
        <span>Hình ảnh</span>
        <input
          type="file"
          {...register("image")}
          
          ></input>
        </>           

        <>
          <span>Nội dung bìa</span>
          <textarea name="" id="" cols="30" rows="1"></textarea>
        </>

        <>
          <span>Chi tiết sản phẩm</span>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
