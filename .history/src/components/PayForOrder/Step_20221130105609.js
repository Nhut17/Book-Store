import React, { useState } from 'react'
import AddressAndServices from './AddressAndServices'
import Payment from './Payment'
import ConfirmOrder from './ConfirmOrder'
import { list_main_product } from '../data'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../../redux/reducer/orderSlice'
import { Link, useNavigate } from 'react-router-dom'
import OrderSuccess from './OrderSuccesss'
function Step() {
    const [step, setStep] = useState(0)
    const [page, setPage] = useState('address')

    const currentCart = useSelector(state => state.cart.cart)
    const addressOrder = useSelector(state => state.address.listAddress)
    const navigate =  useNavigate()

    const dispatch = useDispatch()

    const [payment, setPayment] = useState();

    const handleOnClickNext = () => {
        if (step === 0) {
            setPage('confirm')
            setStep(1)
        }
    }


    const handleOnClickBack = () => {
        if (step === 1) {
            setPage('address')
            setStep(0)
        }
        if( step === 0 ){
            navigate('/check-out')
        }
    }


    const handleConfirmOrder = () => {
        console.log('create order')
        const listCart = currentCart.map(val => {
            return {
                quantity: val.quantity.toString(),
                unit_price: (val.price * val.quantity).toString(),
                product_id: val.productId.toString()
            }
        })
        const data = [

            listCart,
            {
                payment: payment,
            }
        ]
        console.log(data)
        dispatch(createOrder(data))
    }

    return (
        <div className='step-container'>
            <div className='container'>
                <div>                <ul className='progress-bar'>
                    <li className={step === 0 || step === 1 ? 'active' : ''}>Địa chỉ và Thanh Toán</li>
                    <li className={step === 1 ? 'active' : ''}>Xác nhận đơn hàng</li>
                </ul></div>

            </div>
            <div className='main-contain'>
                {
                    page === 'address' && <AddressAndServices payment={payment} setPayment={setPayment} />
                }
                {
                    page === 'confirm' && <ConfirmOrder payment={payment} />
                }
            </div>

            <div className="button-group">
                {step === 1 ?
                    <>
                        <button className='back' onClick={handleOnClickBack}>Trở về</button>
                        <button className='next'
                            onClick={handleConfirmOrder}>
                            <Link to='/success' className='header'>
                                Xác nhận
                            </Link>
                        </button>
                    </>
                    :
                    <>
                        <button className='back'
                            onClick={handleOnClickBack}>Trở về</button>
                        <button className='next'

                            onClick={handleOnClickNext}>Tiếp tục</button></>

                }
            </div>
        </div>
    )
}
export default Step