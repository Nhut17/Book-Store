import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import TableBooks from './TableBooks';
const Title = () => {

    const listCart = useSelector(state => state.cart.cart)
    const loading = useSelector

    return (
        <div className='main-box-product'>
            <div className='main-box-title'>GIỎ HÀNG</div>
            <TableBooks listCart={listCart} />
            <div className='button-group'>
                <button className='btn thanh-toan'><Link to='/pay-for-order'>Thanh toán</Link></button>
                <button className='btn quay-lai'>Quay lại</button>
            </div>
        </div>
    )
}
export default Title