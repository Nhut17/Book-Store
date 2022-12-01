import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MainProfile from '../components/Profile/MainProfile';
import '../sass/Profile/InfoProfile.scss'

const InfoProfile = () => {

    const breadcrumbs = [
        {
            direct: 'Trang chủ',
            path:'/'
        },
        {   
            direct: 'Thông tin cá nhân',
            path: ''
        }
    ]

  return (
    <div className='info-profile'> 
        <div className="container">


        <MainProfile />

        </div>
    </div>
  )
}

export default InfoProfile