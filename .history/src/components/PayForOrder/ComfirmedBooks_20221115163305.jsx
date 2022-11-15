import React from 'react'
import SelectedBooks from './SelectedBooks'
const ComfirmedBooks = ({ listbook }) => {
    console.log(listbook)
    
    return (
        <div className='confirmed-books'>
            <div className='container-confirmed'>
                <div className='content-title'>
                    <span className='tilte-products'>sản phẩm</span>
                </div>
                <div className='content-down'>
                    {listbook.map(item => (
                        <SelectedBooks data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ComfirmedBooks