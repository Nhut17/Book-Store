import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const AdminNavBar = ({children}) => {
  return (
    <div className='admin-nav-bar'>
        <Sidebar />

        <div className="nav-bar-content">
            {chirend}
        </div>

    </div>
  )
}

export default AdminNavBar
