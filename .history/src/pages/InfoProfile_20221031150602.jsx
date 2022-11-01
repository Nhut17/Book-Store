import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';
import Main

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



        </div>
    </div>
  )
}

export default InfoProfile