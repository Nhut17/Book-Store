import React from 'react';
import Order from './Order';


function ListOrder(props) {
   
    return (
       <div className="all-order">

            <table>
                <tr>
                    <th>Mã đơn</th>
                    <th></th>
                </tr>
            </table>

           <Order></Order>
       </div>
    );
}

export default ListOrder;