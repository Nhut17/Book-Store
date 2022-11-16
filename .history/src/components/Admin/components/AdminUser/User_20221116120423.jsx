import React from 'react';
import { useDispatch } from 'react-redux';
import { DeleteOutlined} from '@ant-design/icons';
import DataUser from './DataUser';
function User({listUser}) {
  

    return (
        <>
        {
            listUser && listUser.map((data,indx) => (
                <DataUser data={data} />
            ))
        }
        </>
    );
}

export default User;