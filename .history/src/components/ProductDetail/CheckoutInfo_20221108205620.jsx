import React, { useContext, useEffect } from 'react'
import { LoginContext } from '../../context/loginContext'
import { ProductDetailContext } from '../../context/productDetailContext'

const CheckoutInfo = ({data}) => {

  const contextHeader = useContext(LoginContext)
  const contextProductDetail = useContext(ProductDetailContext)

  useEffect(() => {
    console.log('header context: '+ contextHeader.showLogin)
    console.log('product detail context: '+ contextProductDetail.showLogin)
  },[])

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
            <button><i class="fa-solid fa-cart-shopping ic"></i>MUA NGAY</button>
        </div>
    </div>
  )
}

export default CheckoutInfo
