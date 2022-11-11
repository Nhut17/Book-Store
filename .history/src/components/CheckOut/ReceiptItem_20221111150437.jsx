import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { decreaseCart, deleteCart, increaseCart } from '../../redux/reducer/cartSlice'
const ReceiptItem = ({ index, data }) => {

    const dispatch = useDispatch()

    // Handle decrease item cart
    const handleDecrease = () => {
        
        if(data.quantity > 0)
        {
            dispatch(decreaseCart(data.productId))
        }
    }

    // Handle increase item cart
    const handleIncrease = () => {
        dispatch(increaseCart(data.productId))
    }


    // Handle Delete Item
    const handleDelete = () => {
        dispatch(deleteCart(data.productId))
    }


    return (
        <div className='main-product' key={index}>
            <div className="img"><img src={data.proImage} alt="" /></div>
            <div className="content">
                <div className="up">
                    <span>{data.proName}</span>
                    <span className='price'>{data.price}<span className='quantity'>x {data.quantity}</span></span>

                </div>
                <div className='down'>
                    <div className="quantity">
                        <button onClick={handleDecrease}>-</button>
                        <input value={data.quantity}  />
                        <button onClick={handleIncrease}>+</button>
                    </div>
                    <div className='delete'>
                        <i className="fas fa-trash" onClick={handleDelete}></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReceiptItem