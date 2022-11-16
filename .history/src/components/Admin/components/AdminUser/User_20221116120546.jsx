import React from 'react';
import { useDispatch } from 'react-redux';
import DataUser from './DataUser';
function User({data,stt}) {
  

    return (
    <>
        <td>{stt}</td>
        <td>{data.name}</td>
        <td>{'user.email'}</td>
        <td>{'user.address'}</td>
        <td>{'user.phone'}</td>
        <td className="delete-user"><DeleteOutlined /></td>
    </>
    );
}

export default User;