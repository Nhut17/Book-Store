import React from 'react'
import SelectedBooks from './SelectedBooks'
const ComfirmedBooks = ({ listbook }) => {
    console.log(listbook)
    return (
        <div className='comfirmed-books'>
            <div className='container-confirmed'>
                <div className='content-title'>
                    <span className='tilte-products'>sản phẩm</span>
                    <span className='change-address'>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Sửa
                    </span>
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