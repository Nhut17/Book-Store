import React from 'react'
const EachTransaction = ({ key, orderDetail }) => {
    console.log('each transaction', orderDetail)
    return (
        <div className='each-transaction' key={key}>
            <div className="img" style={{ backgroundImage: `url(${orderDetail.productImage})` }}>
                <span>{orderDetail.tranQuantity}</span>
            </div>
            <div className="content">
                <div className="up">
                    <span className='product-name'>{orderDetail.productName}</span>
                    <span className='product-price'>{orderDetail.tranUnitPrice*orderDetail.tranQuantity}</span>
                </div>
                <div className='down'>
                    <span className='product-author'>{orderDetail.productAuthor}</span>
                </div>
            </div>
        </div>
    )
}
export default EachTransaction