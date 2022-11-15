import React from 'react'
const SelectedBooks = ({data}) => {
    // console.log('log dataaaa',data)
    return (
        <div className='selected-books' key={data.id}>
            <div className="img"><img src={data.proImage} alt="" /></div>
            <div className="content">
                <div className="up">
                    <span className='name'>{data.proName}</span>
                    <span className='price'>{data.quantity} x {data.price} ₫</span>
                </div>
            </div>
        </div>
    )
}
export default SelectedBooks