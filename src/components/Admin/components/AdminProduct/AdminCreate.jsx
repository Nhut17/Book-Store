
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import ListSelect from "../../SubComponents/BoxSelect/ListSelect";
import { getAllCategories } from '../../../../redux/reducer/categorySlice'
import { getAllAuthor } from '../../../../redux/reducer/authorSlice'
import { addImageProduct, createProduct } from "../../../../redux/reducer/productSlice";

function AdminCreate(props) {
  const { register, handleSubmit } = useForm({ defaultValues: {} });

  const listCate = useSelector(state => state.category.listCate)
  const dispatch = useDispatch()
  const listAuthor = useSelector(state => state.author.listAuthor)
  const [selectImg, setSelectImg] = useState(null)
  const [defaultImg, setDefaultImg] = useState('')

  useEffect(() => {
    dispatch(getAllAuthor())
  }, [])


  const handleCreateProduct = (formData) => {

    const { proImage } = formData

    // const {
    //   proName,
    //   proDescription,
    //   proContent,
    //   proPrice,
    //   proQuantity,
    //   proSale,
    //   categoryId,
    //   authorId,
    // } = formData


    // const data = {
    //   proName: proName,
    //   proDescription: proDescription,
    //   proContent: proContent,
    //   proPrice: parseInt(proPrice),
    //   proQuantity: parseInt(proQuantity),
    //   proSale: parseInt(proSale),
    //   proImage: '',
    //   categoryId: parseInt(categoryId),
    //   authorId: parseInt(authorId),
    //   publisherId: 3
    // }
    // const data = {
    //   id:21,
    //   proName: "Thay Đổi Cuộc Sống Với Nhân Số Học",
    //   proDescription: "Cuốn sách ",
    //   proContent: "Đầu năm 2020, chuỗi ",
    //   proPrice: 248000,
    //   proQuantity:100,
    //   proSale: 15,
    //   proImage: "",
    //   categoryId: 2,
    //   authorId: 1,
    //   publisherId: 3
    // }
    console.log(proImage[0]);
    // var file    = document.querySelector('input[type=file]').files[0];
    // let data = new FormData()
    // data.append("image", proImage[0].name);
    // data.append('abc', 'abc')
    // data.append('image', proImage[0].name)
    let data = proImage[0]

    // let data = new FormData()
    // data.append('image', proImage[0].name)
    console.log('data', data)

    dispatch(addImageProduct(data))
  }


  const handleOnClick = (e) => {
    console.log(e.target)
  }

  const selectFile = (e) => {

  }



  return (
    <div className="admin-create">
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
            {...register('categoryId', {
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
            onChange={selectFile}
            {...register("proImage")}
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
