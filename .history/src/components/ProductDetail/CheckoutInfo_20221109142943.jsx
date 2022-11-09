import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LoginContext } from '../../context/loginContext'
import { ProductDetailContext } from '../../context/productDetailContext'
import { addCart } from '../../redux/reducer/cartSlice'

const CheckoutInfo = ({data}) => {

  const detailContext = useContext(ProductDetailContext)
  const [showLogin, setShowLogin, setLayoutModal, setShowSignUp] = useContext(LoginContext)
  const { id } = useParams()
  const dispatch = useDispatch()
  const state = useSelector(state => state.cart)

  const handleBuy = () => {
    const token = localStorage.getItem('token')

    if(!token){
      setShowLogin(true)
    }else {
      console.log('buy')
      console.log(state.cart)
      
      dispatch(addCart({
        productId: 1,
        quantity: 1,
        price: 1000
      }))
    }

  }

  return (

    <div className='checkout-info'>
        <p className="title">Thông tin thanh toán</p>
        <div className="content-checkout">
            <p className="price-old flex-j-between">Giá bìa<span className='vrt-r'>{data.priceOld.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></span></p>
            <p className="price-new flex-j-between">Giá bán<span className='vrt-r'>{data.priceNew.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} 
                                    <span className='currency'>&#8363;</span></span>
                                    </p>
            <p className='promotion flex-j-between'>Tiền tiết kiệm <span>{data.promotion}%</span></p>
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
