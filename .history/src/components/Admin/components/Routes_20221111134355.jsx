import React from 'react';
import { Route, Routes } from 'react-router-dom'
import DashBoard from './DashBoard/DashBoard';
import AdminProduct from './AdminProduct/AdminProduct';
import AdminCreate from './AdminProduct/AdminCreate'
import AdminUpdate from './AdminProduct/AdminUpdate'
import AdminOrder from './AdminOrder/AdminOrder'
import AdminUser from './AdminUser/AdminUser';
// import AppChat from './AppChat/AppChat'
import ReviewProduct from './AdminProduct/ReviewProduct/ReviewProduct';
import DataFilterProduct from './AdminProduct/DataFilterProduct/DataFilterProduct';

function Routes(props) {
    return (
        <Routes>
            <Route path='/admin/'  ele={DashBoard}/>
            <Route path='/admin/customer' ele={AdminUser}/>

            <Route path='/admin/product/create' ele={AdminCreate}/>
            <Route path='/admin/product/update/info'  ele={DataFilterProduct}/>
            <Route path='/admin/product/update/:id' ele={AdminUpdate}/>
            <Route path='/admin/product/reviewProduct/:id' ele={ReviewProduct}/>
            <Route path='/admin/product/' ele={AdminProduct}/>

            <Route path='/admin/order'  ele={AdminOrder}/>
            {/* <Route path='/admin/chat' component={AppChat}/> */}
        </Routes>
    );
}

export default Routes;