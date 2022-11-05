import React from 'react'
import Receipt from '../components/CheckOut/Receipt'
import '../sass/PayForOrder/PayForOrder.scss'
import { useState } from 'react'
import Step from '../components/PayForOrder/Step'
const PayForOrder = () => {

    const [step, setStep] = useState(2)
    const [page, setPage] = useState('confirm')

    const handleOnClickNext = () => {
        if (step === 0) {
            setPage('payment')
            setStep(1)
        }
        else {
            setPage('confirm')
            setStep(2)
        }
    }
    const handleOnClickBack = () => {
        if (step === 1) {
            setPage('address')
            setStep(0)
        }
        else {
            setPage('payment')
            setStep(1)
        }
    }
    return (
        <div className='pay-for-order'>
            <div className="container">
                <Receipt />
                <Step />

                <div className="button-group">
                    <button className='back'
                        onClick={handleOnClickBack}>Back</button>
                    <button className='next'
                        onClick={handleOnClickNext}>Next</button>
                </div>
            </div>
        </div>
    )
}
export default PayForOrder