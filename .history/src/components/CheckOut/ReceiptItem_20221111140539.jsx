import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const ReceiptItem = ({ index, data }) => {
    console.log('data', data)
    return (
        <div className='main-product' key={index}>
            <div className="img"><img src={data.proImage} alt="" /></div>
            <div className="content">
                <div className="up">
                    <span>{data.proName}</span>
                    <span>{data.price}x{data.quantity}</span>

                </div>
                <div className='down'>
                    <div className="quantity">
                        <button>-</button>
                        <input defaultValue={1} ></input>
                        <button >+</button>
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