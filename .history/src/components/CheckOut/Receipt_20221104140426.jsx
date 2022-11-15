import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Home/logo.png'

const Receipt = () => {
    return (
        <>
            <div className='receipt-container'>
                <Link to='/' className='header'>
                    <img src={logo} alt="" />
                </Link>
            </div>
        </>

    )
}
export default Receipt