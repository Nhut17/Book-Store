import React, { useEffect, useState } from 'react'
import '../sass/Home/home.scss'
import CategoriesProduct from '../components/Home/CategoriesProduct'
import ListBanner from '../components/Home/ListBanner'
import MainLeft from '../components/Home/MainLeft'
import MainRight from '../components/Home/MainRight'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/reducer/productSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch()
  const listProduct = useSelector(state => state.product.listProduct)
  const user = useSelector(state => state.user)
  const [successLogin,setSuccessLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(user.success)
    {
      toast(`Chào mừng ${user.user?.name}`, 
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
  }
  },[user.success])

  useEffect(() => {
      if(user.user?.roles[0].authority === 'ADMIN')
      {
        navigate('/admin')
      }
  },[user.user])

  useEffect(() => {
    dispatch(getProducts())
  },[])

  return (
    <div className='home'>
       {
          user.success &&  
          <ToastContainer />
        }
        <div className="container">

          <div className="main-top">
            
            <CategoriesProduct  />

            <ListBanner />

          </div>

          <div className="main">

            <MainLeft list_product={listProduct} />

            <MainRight list_product={listProduct} />

          </div>

        </div>
    </div>
  )
}

export default Home
