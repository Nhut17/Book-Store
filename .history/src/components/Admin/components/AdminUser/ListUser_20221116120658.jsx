import React from 'react';
import User from './User';


const ListUser = ({listUser})  => {

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
                    listUser.map((data,indx) => (
                        <tr>
                            <User data={data} stt />

                        </tr>
                    ))
                }

                  
                

            </table>
        </div>
    );
}

export default ListUser;