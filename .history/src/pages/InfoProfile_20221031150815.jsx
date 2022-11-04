import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import MainProfile from '../components/Profile/MainProfile';
import '../sass/'

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

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <MainProfile />

        </div>
    </div>
  )
}

export default InfoProfile