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

function Routess(props) {
    return (
        <Routes>


            <Route path='/admin' element={<DashBoard />}>
                <Route path='/customer' element={<AdminUser />}/>
                <Route path='product/create' element={<AdminCreate />}/>
                <Route path='product/update/info' element={<DataFilterProduct />}/>
                <Route path='product/update/:id' element={<AdminUpdate />}/>
                <Route path='product/reviewProduct/:id' element={<ReviewProduct />}/>
                <Route path='product/' element={<AdminProduct />}/>
                <Route path='order' element={<AdminOrder />}/>

            </Route>
        </Routes>
    );
}

export default Routess;