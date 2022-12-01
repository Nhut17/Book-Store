import React from 'react';
import User from './User';


const ListUser = ({ listUser }) => {


    return (
        <div className="admin-user-list">
            <table>
                <tr style={{textAlign: 'center'}}>
                    <th style={{ width: '4%' }}>STT</th>
                    <th style={{ width: '20%' }}>Tên</th>
                    <th style={{ width: '30%' }}>Email</th>
                    <th style={{ width: '20%' }}>Số điện thoại</th>
                    <th style={{ width: '20%' }}>UserName</th>
                </tr>

                {
                    listUser &&
                    listUser.map((data, index) => (
                        <User data={data} stt={index} />
                    ))
                }
            </table>
        </div>
    );
}

export default ListUser;