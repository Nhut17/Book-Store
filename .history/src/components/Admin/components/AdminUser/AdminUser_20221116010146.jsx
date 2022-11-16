import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListUser from './ListUser';
import './AdminUser.scss'

function AdminUser(props) {
 
    return (
        <div className="admin-user">
            <span>Customers</span>
            {
              

                <ListUser />
            }
        </div>
    );
}

export default AdminUser;