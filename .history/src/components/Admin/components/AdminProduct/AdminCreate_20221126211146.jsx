
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import ListSelect from "../../SubComponents/BoxSelect/ListSelect";
import { getAllCategories } from '../../../../redux/reducer/categorySlice'
import { getAllAuthor } from '../../../../redux/reducer/authorSlice'
import { addImageProduct, createProduct } from "../../../../redux/reducer/productSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });

  const listCate = useSelector(state => state.category.listCate)
  const dispatch = useDispatch()
  const listAuthor = useSelector(state => state.author.listAuthor)
  const [selectImg,setSelectImg] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllAuthor())
  }, [])


  const handleCreateProduct = (formData) => {
    
    const {
      proName,
      proDescription,
      proContent,
      proPrice,
      proQuantity,
      proSale,
      categoryId,
      authorId,
     } = formData

    const data = {
      proName: proName,
      proDescription: proDescription,
      proContent: proContent,
      proPrice: parseInt(proPrice),
      proQuantity:parseInt(proQuantity),
      proSale: parseInt(proSale),
      proImage: selectImg,
      categoryId: parseInt(categoryId),
      authorId: parseInt(authorId),
      publisherId: 3
    }
    dispatch(createProduct(data))

    toast("Thêm sản phẩm thành công!", 
      {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      
    },1500)
    
  }


  const handleOnClick = (e) => {
    console.log(e.target)
  }

  const selectFile = (e) => {
     
  }



  return (
    <div className="admin-create">
      <ToastContainer />
      <span>Create Product</span>
      <form
        className="admin-create-product"
        onSubmit={handleSubmit(handleCreateProduct)}
        encType="multipart/form-data"
      >

        <span>Tên sản phẩm</span>
        <input {...register("proName")} placeholder=""></input>

        <div className="cate select-group">


        <span>Danh mục</span>
          <select 
          className="cate-select"
          {...register('categoryId',{
            required: true,
          })}  >
            {listCate.map(item => (
              <option value={item.id}>{item.catName}</option>
            ))}
          </select>
        </div>

        <div className="author select-group">
          <span>Tác giả</span>
          <select {...register('authorId', {
            required: true,
          })}  >
            {listAuthor?.map(item => (
              <option value={item.id}>{item.autName}</option>
            ))}
          </select>

        </div>

        <>
          <span>Giá</span>
          <input {...register("proPrice")} placeholder="" type="number"></input>
        </>

        <>
          <span>Giảm giá</span>
          <input {...register("proSale")} placeholder="" type="number"></input>
        </>

        <>
          <span>Số lượng</span>
          <input {...register("proQuantity")} placeholder="" type="number"></input>
        </>

        <>
          <span>Hình ảnh</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectImg(e.target.files[0])}
            // {...register("image")}

          ></input>
        </>

        <>
          <span>Nội dung bìa</span>
          <textarea {...register('proContent')} cols="30" rows="1"></textarea>
        </>

        <>
          <span>Chi tiết sản phẩm</span>
          <textarea{...register('proDescription')} cols="30" rows="10"></textarea>
        </>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
