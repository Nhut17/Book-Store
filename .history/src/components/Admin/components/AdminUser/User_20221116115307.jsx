import React from 'react';
import { useDispatch } from 'react-redux';
// import { deleteUser, getAllUser } from '../../../../actions/UserAction';
import { DeleteOutlined} from '@ant-design/icons';

function User({data,indx}) {
  

    return (
        <tr>
            <td>1</td>
            <td>{'user.name'}</td>
            <td>{'user.email'}</td>
            <td>{'user.address'}</td>
            <td>{'user.phone'}</td>
            <td className="delete-user"><DeleteOutlined /></td>
        </tr>
    );
}

export default User;