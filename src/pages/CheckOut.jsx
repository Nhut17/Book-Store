import React from 'react'
import Receipt from '../components/CheckOut/Receipt'
import Title from '../components/CheckOut/Title'
import '../sass/Checkout/CheckOut.scss'
const CheckOut = () => {



    return (
        <div className='receipt'>
            <Receipt />
            <Title />

        </div>
    )
}
export default CheckOut