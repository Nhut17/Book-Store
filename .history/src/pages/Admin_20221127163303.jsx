import React, { useEffect } from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Admin = () => {

  const admin = useSelector(state => state.user.user)
  const navigate = useNavigate()



  return (
    <div className='bg-admin'>
        <MainAdmin />
    </div>
  )
}

export default Admin
