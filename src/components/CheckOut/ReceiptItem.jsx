import { faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
const ReceiptItem = ({ data }) => {
    return (
        <div className='main-product' key={data.id}>
            <div className="img"><img src={data.img} alt="" /></div>
            <div className="content">
                <div className="up">
                    <span>{data.name}</span>
                    <span>{data.oldPrice}x1</span>
                    {/* <div className='name'>{data.name}</div>
                    <div className='price'>{data.oldPrice}x1</div> */}

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