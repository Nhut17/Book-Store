import React, { useEffect } from 'react'
import '../sass/admin/admin.scss'
import MainAdmin from '../components/Admin/MainAdmin'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Admin = () => {

  const admin = useSelector(state => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!admin){
      navigate('/')
    }
    if (admin) {
      if (admin?.roles[0]?.authority === 'USER') {
        navigate('/')
      }
      if (admin?.roles[0]?.authority === 'ADMIN') {
        navigate('/admin')
      }
     
    }
  },[])

  return (
    <div className='bg-admin'>
        <MainAdmin />
    </div>
  )
}

export default Admin
