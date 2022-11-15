import React from 'react'
import SelectedBooks from './SelectedBooks'
const ComfirmedBooks = ({ listbook }) => {
    
    return (
        <div className='confirmed-books'>
            <div className='container-confirmed'>
                <div className='content-title'>
                    <span className='tilte-products'>sản phẩm</span>
                </div>
                <div className='content-down' style={
                    listbook.length > 2 ? {
                        overflowY:
                    } : {}
                }>
                    {listbook.map(item => (
                        <SelectedBooks data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ComfirmedBooks