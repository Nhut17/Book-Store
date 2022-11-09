import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TableBooks from './TableBooks';
const Title = () => {

    const listCart = useSelector(state => state.cart.cart)

    return (
        <div className='main-box-product'>
            <div className='main-box-title'>GIỎ HÀNG</div>
            <TableBooks listCart={listCart} />
            <div className='button-group'>
                <button className='btn thanh-toan'>Thanh toán</button>
                <button className='btn quay-lai'>Quay lại</button>
            </div>
        </div>
    )
}
export default Title