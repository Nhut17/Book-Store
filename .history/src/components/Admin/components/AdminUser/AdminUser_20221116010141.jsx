import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListUser from './ListUser';
import './AdminUser.scss'

function AdminUser(props) {
 
    return (
        <div className="admin-user">
            <span>Customers</span>
            {
                // users ? (<ListUser users={users}></ListUser>) : (<h2> Loading</h2>

                <ListUser></ListUser>
            }
        </div>
    );
}

export default AdminUser;