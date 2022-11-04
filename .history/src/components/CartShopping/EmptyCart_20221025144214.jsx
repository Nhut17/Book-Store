import React from 'react'
import { useState } from 'react'


const EmptyCart = () => {

    const [quantity,setQuantity] = useState(0)

  return (
    <div className="empty-cart">

        <div className="image-empty">
         <img src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="" />
        </div>

        <div className="total-price">
                <span className="total">Tổng cộng:<span className='price'>{0.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>
                <button disabled={true}>XEM GIỎ HÀNG</button>
        </div>
 </div>
  )
}

export default EmptyCart