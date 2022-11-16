import { Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import ListSelect from "../../SubComponents/BoxSelect/ListSelect";
import { getAllCategories } from '../../../../redux/reducer/categorySlice'
import { getAllAuthor } from '../../../../redux/reducer/authorSlice'
import { addImageProduct } from "../../../../redux/reducer/productSlice";

function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });

  const listCate = useSelector(state => state.category.listCate)
  const dispatch = useDispatch()
  const listAuthor = useSelector(state => state.author.listAuthor)
  const [selectImg,setSelectImg] = useState(null)
  const [defaultImg,setDefaultImg] = useState('')

  useEffect(() => {
    dispatch(getAllAuthor())
  }, [])
  const createProduct = (formData) => {
    const { image } = formData

    const dataFile = new FormData()
    dataFile.append('image',image.file[0])

    const data = {
      id: 16,
      image: image
    }

    dispatch(addImageProduct(data))
    console.log(image)
  }


  const handleOnClick = (e) => {
    console.log(e.target)
  }

  const selectFile = (e) => {
      // let file = e.target.files[0]
      // const reader = new FileReader()

      // reader.onload = () => {
      //   if(reader.readyState === 1)
      //   {
      //     setSelectImg(reader.result)
      //   }
      // }

      // reader.readAsDataURL(file)
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

        <div className="cate select-group">

          <span>Danh mục</span>
          <select {...register('category', {
            required: true,
          })}  >
            {/* <option value="1">female</option> */}
            {listCate.map(item => (
              <option value={item.id}>{item.catName}</option>
            ))}
          </select>
        </div>

        <div className="author select-group">
          <span>Tác giả</span>
          <select {...register('author', {
            required: true,
          })}  >
            {/* <option value="1">female</option> */}
            {listAuthor?.map(item => (
              <option value={item.id}>{item.autName}</option>
            ))}
          </select>
         
        </div>

        <>
          <span>Giá</span>
          <input {...register("price")} placeholder="" type="number"></input>
        </>

        <>
          <span>Giảm giá</span>
          <input {...register("promotion")} placeholder="" type="number"></input>
        </>

        <>
          <span>Số lượng</span>
          <input {...register("quantity")} placeholder="" type="number"></input>
        </>

        <>
          <span>Hình ảnh</span>
          <input
            type="file"
            accept="image/*"
            onChange={selectFile}
            {...register("image")}

          ></input>
        </>

        <>
          <span>Nội dung bìa</span>
          <textarea {...register('content')} cols="30" rows="1"></textarea>
        </>

        <>
          <span>Chi tiết sản phẩm</span>
          <textarea{...register('description')} cols="30" rows="10"></textarea>
        </>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
