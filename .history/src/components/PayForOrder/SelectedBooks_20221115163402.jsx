import React from 'react'
const SelectedBooks = ({data}) => {
    // console.log('log dataaaa',data)
    return (
        <div className='selected-books' key={data.data.id}>
            <div className="img"><img src={data.data.proImage} alt="" /></div>
            <div className="content">
                <div className="up">
                    <span className='name'>{data.data.proName}</span>
                    <span className='price'>{data.data.quantity}x{data.data.price} ₫</span>
                    {/* <div className='name'>{data.name}</div>
                    <div className='price'>{data.oldPrice}x1</div> */}
                </div>
            </div>
        </div>
    )
}
export default SelectedBooks