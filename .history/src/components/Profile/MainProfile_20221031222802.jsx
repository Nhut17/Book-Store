import React from 'react'
import InfoUser from './InfoUser'
const MainProfile = () => {
  return (
    <div className='main-profile'>
        <span className="title">Thông tin cá nhân</span>

        <span className="hello">Xin Chào </span>
        <InfoUser />

        <button className='save'>LƯU</button>

    </div>
  )
}

export default MainProfile 