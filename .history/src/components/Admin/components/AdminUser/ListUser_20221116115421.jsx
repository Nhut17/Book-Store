import React from 'react';
import User from './User';


function ListUser({listUser}) {
    // const {users} = props

    return (
        <div className="admin-user-list">
            <table>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                </tr>
                {
                    listUser &&
                    listUser?.map((data,indx) => (

                        <User data={data} stt={indx} />
                    ))
                }
            </table>
        </div>
    );
}

export default ListUser;