import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs';


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

        <Breadcrumbs breadcrumbs={} />

    </div>
  )
}

export default InfoProfile