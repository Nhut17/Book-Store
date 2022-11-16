import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListUser from './ListUser';
import './AdminUser.scss'
import { getAllUser } from '../../../../redux/reducer/userSlice';

function AdminUser(props) {

    const listUser = useSelector(state => state.user.listUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUser())
    },[listUser])

 
    return (
        <div className="admin-user">
            <span>Customers</span>

            <ListUser listUser={listUser} />

        </div>
    );
}

export default AdminUser;