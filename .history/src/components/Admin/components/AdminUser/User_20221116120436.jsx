import React from 'react';
import { useDispatch } from 'react-redux';
import DataUser from './DataUser';
function User({listUser}) {
  

    return (
        <>
        {
            listUser && listUser.map((data,indx) => (
                <DataUser data={data} stt={indx} />
            ))
        }
        </>
    );
}

export default User;