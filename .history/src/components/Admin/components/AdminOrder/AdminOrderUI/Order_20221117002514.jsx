import React from "react";
import { useDispatch } from "react-redux";



function  Order(props) {
  
  let status  = 'pending'
  let paymentResult = false
  let paymentMethod = 'payOnline'
  let cancelOrder = false

  return (
    
     <tr>
        <td className="id-order">1</td>
        <td className="name-customer">1</td>
        <td className="product-name">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nesciunt tempore, veniam voluptates perferendis molestiae nobis dolores placeat commodi laudantium vitae dolore accusantium enim nulla rem vero velit quos soluta?</td>
        <td className="quantity">1</td>
        <td className="date-buy">1</td>
        <td className="status"><span className="status">1</span></td>
        <td className="actions">1</td>
     </tr>
    
  );
}

export default Order;
