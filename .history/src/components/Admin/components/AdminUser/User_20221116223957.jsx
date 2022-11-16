import { DeleteOutlined, EditOutlined } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../../../redux/reducer/userSlice';
import DataUser from './DataUser';
function User({ data, stt }) {

    const dispatch = useDispatch()

    const handleOnDeleteCate = () => {
        dispatch(deleteUser(data.userEmail))   
    }
    return (
        <tr>
            <td >{stt + 1 }</td>
            <td>{data.fullName}</td>
            <td>{data.userEmail}</td>
            <td>{data.userPhone}</td>
            <td>{data.username}</td>

            
            <div onClick={handleOnDeleteCate} 
                className='delete-user'
                >
                    <DeleteOutlined />
                </div>
            {/* <div className='edit-user'>
                <EditOutlined />

            </div> */}
           
        </tr>
    );
}

export default User;