import React, { useEffect } from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useSelector } from 'react-redux'
const Admin = () => {

  const admin = useSelector(state => state.user.user)

  useEffect(() => {
      if(user){

      }
  },[])

  return (
    <div className='bg-admin'>
        <MainAdmin />
    </div>
  )
}

export default Admin
