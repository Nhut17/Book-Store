import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
const ReceiptItem = ({ index, data }) => {

    const [quantity,setQuantity] = useState(0)

    const handleDecrease = () => {
        setQuantity(prev => prev + 1)
    }

    const handleIncrease = () => {
        if(quantity > 0)
        {
            setQuantity(prev => prev - 1)
        }
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
                        <button onClick={handleDecrease}
                                style={quantity <= 0 ? {
                                    cursor:'not-allowed',
                                } : {}}
                                clas  ><span className='ic'>-</span></button>
                        <input defaultValue={quantity} disabled={true} ></input>
                        <button onClick={handleIncrease}><span className='ic'>+</span></button>
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