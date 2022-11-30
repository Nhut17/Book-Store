import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import TableBooks from './TableBooks';
const Title = () => {

    const listCart = useSelector(state => state.cart.cart)
    const loading = useSelector(state => state.cart.loading)
    const navigate = useNavigate()
    return (
        <div className='main-box-product'>
            <div className='main-box-title'>GIỎ HÀNG</div>
            <TableBooks listCart={listCart} loading={loading} />
            <div className='button-group'>
            <Link to='/pay-for-order'>
                <button className='btn thanh-toan'>Thanh toán</button>
            </Link>
                <button className='btn quay-lai' onClick={() => navigate('/')}>Quay lại</button>
            </div>
        </div>
    )
}
export default Title