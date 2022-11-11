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
        <outes>
            <Route path='/admin/' exact component={DashBoard}/>
            <Route path='/admin/customer' component={AdminUser}/>

            <Route path='/admin/product/create' component={AdminCreate}/>
            <Route path='/admin/product/update/info' exact component={DataFilterProduct}/>
            <Route path='/admin/product/update/:id' component={AdminUpdate}/>
            <Route path='/admin/product/reviewProduct/:id' component={ReviewProduct}/>
            <Route path='/admin/product/' component={AdminProduct}/>

            <Route path='/admin/order' exact component={AdminOrder}/>
            {/* <Route path='/admin/chat' component={AppChat}/> */}
        </outes>
    );
}

export default Routes;