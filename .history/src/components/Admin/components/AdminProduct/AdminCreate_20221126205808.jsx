
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
  const [selectImg,setSelectImg] = useState(null)

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


    // const data = {
    //   proName: proName,
    //   proDescription: proDescription,
    //   proContent: proContent,
    //   proPrice: parseInt(proPrice),
    //   proQuantity: parseInt(proQuantity),
    //   proSale: parseInt(proSale),
    //   proImage: 'https://www.vinabook.com/ehon-mot-sach-mogu-ban-voi-nuoc-rao-rao-p94873.html',
    //   categoryId: parseInt(categoryId),
    //   authorId: parseInt(authorId),
    //   publisherId: 3
    // }
    const data = {
      proName: proName,
      proDescription: proDescription,
      proContent: proContent,
      proPrice: proPr,
      proQuantity:100,
      proSale: 15,
      proImage: "",
      categoryId: 2,
      authorId: 1,
      publisherId: 3
    }
    // dispatch(createProduct(data))
    dispatch(addImageProduct(selectImg))
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

        <span>T??n s???n ph???m</span>
        <input {...register("proName")} placeholder=""></input>

        <div className="cate select-group">


        <span>Danh m???c</span>
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
          <span>T??c gi???</span>
          <select {...register('authorId', {
            required: true,
          })}  >
            {listAuthor?.map(item => (
              <option value={item.id}>{item.autName}</option>
            ))}
          </select>

        </div>

        <>
          <span>Gi??</span>
          <input {...register("proPrice")} placeholder="" type="number"></input>
        </>

        <>
          <span>Gi???m gi??</span>
          <input {...register("proSale")} placeholder="" type="number"></input>
        </>

        <>
          <span>S??? l?????ng</span>
          <input {...register("proQuantity")} placeholder="" type="number"></input>
        </>

        <>
          <span>H??nh ???nh</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setSelectImg(e.target.files[0])}
            // {...register("image")}

          ></input>
        </>

        <>
          <span>N???i dung b??a</span>
          <textarea {...register('proContent')} cols="30" rows="1"></textarea>
        </>

        <>
          <span>Chi ti???t s???n ph???m</span>
          <textarea{...register('proDescription')} cols="30" rows="10"></textarea>
        </>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AdminCreate;
