import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const AdminNavBar = ({children}) => {
  return (
    <div className='admin-nav-bar'>
        <Sidebar />
        

        <div className="nav-bar-content" style={{background: 'whitesmoke'}}>
          <div className="dashboard-top-content">
              <li className="dashboard-top-content-avatar">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/admin-2075685-1746858.png"></img>
                <span>Admin</span>
              </li>
              <li className="dashboard-top-content-bell">
                {/* <BellOutlined></BellOutlined> */}
              </li>
          </div>
            {children}
        </div>

    </div>
  )
}

export default AdminNavBar
