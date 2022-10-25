import React from 'react'

const EmptyCart = () => {
  return (
    <div className="empty-cart">
    <div className="image-empty">
         <img src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png" alt="" />
     </div>

     <div className="btn-checkout">
         <button >PROCEED TO CHECKOUT</button>
     </div>
 </div>
  )
}

export default EmptyCart