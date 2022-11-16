import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCategories, addCate } from '../../../../redux/reducer/categorySlice'

function AdminCreateCate(props) {
    const { register, handleSubmit } = useForm({ defaultValues: {} });

    const listCate = useSelector(state => state.category.listCate)
    const dispatch = useDispatch()
    const [success,setSuccess] = useState

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    useEffect(() => {
        
    },[])

    const createCate = (formData) => {
        console.log(formData)
        const data = {
            catName: formData.name,
            catParent: parseInt(formData.cate)
        }
        dispatch(addCate(data))

    }
    return (
        <div className="admin-create">
            <span>Create Category</span>
            <form
                className="admin-create-product"
                onSubmit={handleSubmit(createCate)}
                encType="multipart/form-data"
            >
                <span>Tên danh mục</span>
                <input
                    {...register("name")}
                    placeholder=""></input>

                <div className="cate">
                    <span>Danh mục</span>
                    <select
                        className="cate-select"
                        {...register('cate', {
                            required: true,
                        })}  >
                        <option value={0}>Không thuộc cate nào</option>

                        {listCate.map(item => (
                            <option value={item.id}>{item.catName}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">Add Cate</button>
            </form>
        </div>
    );
}

export default AdminCreateCate;
