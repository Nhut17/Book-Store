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
import { getCart } from '../redux/reducer/cartSlice'

const Home = () => {

  const dispatch = useDispatch()
  const listProduct = useSelector(state => state.product.listProduct)
  const { user, success } = useSelector(state => state.user)
  const navigate = useNavigate()



  useEffect(() => {
<<<<<<< HEAD
    if(success)
    {
      toast(`Chào mừng ${user.name}`, 
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
  },[])


  useEffect(() => {
    if(user){
        if(user?.roles[0]?.authority === 'ADMIN')
=======
    if (success) {
      toast(`Chào mừng ${user?.name}`,
>>>>>>> 7c7d8885dc6cc737b81a2f27be9839cdfc8907f1
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
  }, [])

  useEffect(() => {
    if (user) {
      if (user?.roles[0]?.authority === 'ADMIN') {
        navigate('/admin')
      }

    }
  }, [])



  useEffect(() => {
    dispatch(getProducts())
  }, [])
  useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <div className='home'>


      <ToastContainer />
      <div className="main-top">

        <ListBanner />

      </div>

      <div className="container">



        <div className="main">

          <MainLeft list_product={listProduct} />

          <MainRight list_product={listProduct} />

        </div>

      </div>
    </div>
  )
}

export default Home
