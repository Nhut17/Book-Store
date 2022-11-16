import React from 'react';
import User from './User';


const ListUser = ({ listUser }) => {


    return (
        <div className="admin-user-list">
            <table>
                <tr>
                    <th style={{ width: '2%' }}>stt</th>
                    <th style={{ width: '20%' }}>Name</th>
                    <th style={{ width: '30%' }}>Email</th>
                    <th style={{ width: '20%' }}>PhoneNumber</th>
                    <th style={{ width: '20%' }}>UserName</th>
                </tr>

                {
                    listUser?.map((data, index) => (
                        <User data={data} stt={index} />
                    ))
                }
            </table>
        </div>
    );
}

export default ListUser;