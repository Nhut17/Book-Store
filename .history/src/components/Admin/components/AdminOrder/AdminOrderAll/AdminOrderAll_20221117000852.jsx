import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


import ListOrder from "../AdminOrderUI/ListOrder";

function AdminOrderAll(props) {
  

  return (
    <div className="admin-order">

      <ListOrder />
    </div>
  );
}

export default AdminOrderAll;
