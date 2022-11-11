import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import clx from 'classnames'
import { useDispatch } from 'react-redux'
const ReceiptItem = ({ index, data }) => {

    const dispatch = useDispatch()
    const [quantity,setQuantity] = useState(1)

    const handleDecrease = () => {
        
        if(quantity > 0)
        {
            setQuantity(prev => prev - 1)
        }
    }
    const handleIncrease = () => {
        setQuantity(prev=> prev + 1)
        dis
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
                        <input value={quantity}  />
                        <button onClick={handleIncrease}>+</button>
                    </div>
                    <div className='delete'>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReceiptItem