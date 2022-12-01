import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCart } from '../../redux/reducer/cartSlice'

const ActiveCart = ({ listCart }) => {

    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        console.log(id)
        dispatch(deleteCart(id))
    }

    return (
        <div className='active-cart'  >
            <ul style={listCart.length > 6 ? { overflowY: 'scroll' } : {}}>
                {
                    listCart.map(data => (
                        // <Link to={`/product-detail/${data.productId}`} reloadDocument >
                        <li key={data.id}>
                            <div className="img"><img src={data.proImage} alt="" /></div>
                            <div className="info-pro">
                                <p className='name'>{data.proName}</p>
                                <span className='quantity-price'>{data.quantity} x <span className='price'>{data.price?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>

                            </div>
                            <i class="fa-solid fa-trash ic-delete" onClick={() => handleDelete(data.productId)}></i>

                        </li>
                        // </Link>

                    ))
                }


            </ul>
            <div className="total-price">
                <span className="total">Tổng cộng:<span className='price'>{totalPrice?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></span></span>
                <button  ><Link to='/check-out' reloadDocument>XEM GIỎ HÀNG</Link></button>
            </div>
        </div>
    )
}

export default ActiveCart