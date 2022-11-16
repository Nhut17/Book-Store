import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import DataUser from './DataUser';
function User({ data, stt }) {

    const handleOnDeleteCate = () => {
        dispatch(deleteCate(data.id))
    }
    return (
        <tr>
            <td >{stt}</td>
            <td>{data.fullName}</td>
            <td>{data.userEmail}</td>
            <td>{data.userPhone}</td>
            <td>{data.username}</td>
            <div onClick={handleOnDeleteCate} className='delete-user'>
                    <DeleteOutlined />
                </div>
            <td className='edit-user'>
                <EditOutlined />

            </td>
        </tr>
    );
}

export default User;