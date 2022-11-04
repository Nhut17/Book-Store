import React from 'react'
const DiscountCode = () => {
    return (
        <div className='content-discount-code'>
            <div className='title'>Mã giảm giá</div>
            <div className='content-discount'>
                <input type="text" placeholder='Mã giảm giá'
                />
                <button>Sử dụng</button>
            </div>
        </div>
    )
}
export default DiscountCode