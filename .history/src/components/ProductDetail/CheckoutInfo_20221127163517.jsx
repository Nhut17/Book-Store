import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../../context/loginContext'
import { ProductDetailContext } from '../../context/productDetailContext'
import { addCart } from '../../redux/reducer/cartSlice'

const CheckoutInfo = ({ data }) => {

  const [showLogin, setShowLogin, setLayoutModal, setShowSignUp] = useContext(LoginContext)
  const dispatch = useDispatch()

  const handleBuy = () => {
    const token = localStorage.getItem('token')

    if (!token) {
      setShowLogin(true)
    } else {

      dispatch(addCart({
        productId: data.id,
        quantity: 1,
        price: data.proPrice
      }))
    }

  }

  return (

    <div className='checkout-info'>
      <p className="title">Thông tin thanh toán</p>
      <div className="content-checkout">
      {
        
      }
        <p className="price-old flex-j-between">Giá bìa<span className='vrt-r'>{data.proPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <span className='currency'>&#8363;</span></span></p>
        <p className="price-new flex-j-between">Giá bán<span className='vrt-r'>{data.curPrice?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          <span className='currency'>&#8363;</span></span>
        </p>
        <p className='promotion flex-j-between'>Tiền tiết kiệm <span>{data.proSale}%</span></p>
        <p className="qualify flex-j-between">Chất lượng sách <span className='vrt-r'>Loại A</span></p>
      </div>
      <div className="btn-buy">
        <p className="notice-stock"><i class="fa-solid fa-circle-check"></i> SẮP HẾT HÀNG</p>
        <p className='freeship'>Miễn phí giao hàng cho sản phẩm này.</p>
        <button onClick={handleBuy}><i class="fa-solid fa-cart-shopping ic"></i>MUA NGAY</button>
      </div>
    </div>
  )
}

export default CheckoutInfo
