import React, { useState } from 'react'
import AddressAndServices from './AddressAndServices'
import Payment from './Payment'
import ConfirmOrder from './ConfirmOrder'
import { list_main_product } from '../data'

function Step() {
    // const [currentStep, updateCurentStep] = useState(1);
    const [step, setStep] = useState(0)
    const [page, setPage] = useState('address')
    // function updateStep(step) {
    //     updateCurentStep(step)
    // }
    // console.log('step Step', currentStep)

    const handleOnClickNext = () => {
        if (step === 0) {
            setPage('payment')
            setStep(1)
        }
        if (step === 1) {
            setPage('confirm')
            setStep(2)
        }
    }
    const handleOnClickBack = () => {
        if (step === 1) {
            setPage('address')
            setStep(0)
        }
        if (step === 2) {
            setPage('payment')
            setStep(1)
        }
    }
    return (
        <div className='step-container'>
            <div className='container'>
                <ul className='progress-bar'>
                    <li className={step === 0 || step === 1 || step == 2 ? 'active' : ''}> Step 1</li>
                    <li className={step === 1 || step === 2 ? 'active' : ''}> Step 2</li>
                    <li className={step === 2 ? 'active' : ''}> Step 3</li>
                </ul>
            </div>
            <div className='main-contain'>
                {
                    page === 'address' && <AddressAndServices data={list_main_product} />
                }
                {
                    page === 'payment' && <Payment />
                }
                {
                    page === 'confirm' && <ConfirmOrder />
                }
            </div>

            <div className="button-group">
                <button className='back'
                    onClick={handleOnClickBack}>Back</button>
                <button className='next'
                    onClick={handleOnClickNext}>Next</button>
            </div>
        </div>
    )
}
export default Step