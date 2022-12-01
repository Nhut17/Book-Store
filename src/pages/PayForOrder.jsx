import React from 'react'
import Receipt from '../components/CheckOut/Receipt'
import '../sass/PayForOrder/PayForOrder.scss'
import { useState } from 'react'
import Step from '../components/PayForOrder/Step'
const PayForOrder = () => {
    return (
        <div className='pay-for-order'>
            <div className="container">
                <Receipt />
                <Step />
            </div>
        </div>
    )
}
export default PayForOrder