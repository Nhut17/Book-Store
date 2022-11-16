import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import DataUser from './DataUser';
function User({data,stt}) {
  

    return (
    <tr>
        <td>{stt}</td>
        <td>{'hj'}</td>
        <td>{'user.email'}</td>
        <td>{'user.address'}</td>
        <td>{'user.phone'}</td>
        <td className="delete-user"><DeleteOutlined /></td>
    </tr>
    );
}

export default User;