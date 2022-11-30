import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";


import Home from '../pages/Home.jsx';
import TextBook from '../pages/TextBook.jsx';
import LiteratureBook from '../pages/LiteratureBook.jsx';
import ProductDetail from '../components/ProductDetail/ProductDetail.jsx';
import CheckOut from '../pages/CheckOut.jsx';
import PayForOrder from '../pages/PayForOrder.jsx';
import InfoProfile from '../pages/InfoProfile.jsx';
import ForeignLiterature from '../pages/ForeignLiterature.jsx';

import ChildrenBook from '../pages/ChildrenBook.jsx';
import BlockChainBook from '../pages/BlockChainBook.jsx';

import Admin from "../pages/Admin";
import AdminCreate from "../components/Admin/components/AdminProduct/AdminCreate";
import DataFilterProduct from "../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct";
import AdminUpdate from "../components/Admin/components/AdminProduct/AdminUpdate";
import ReviewProduct from "../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct";
import AdminProduct from "../components/Admin/components/AdminProduct/AdminProduct";
import AdminOrder from "../components/Admin/components/AdminOrder/AdminOrder";
import Dashboard from "../components/Admin/pages/Dashboard";
import AdminUser from "../components/Admin/components/AdminUser/AdminUser";
import OrderSuccess from '../components/PayForOrder/OrderSuccesss.jsx';
import AdminCreateCate from '../components/Admin/components/AdminCate/AdminCreateCate.jsx';
import AdminCate from '../components/Admin/components/AdminCate/AdminCate.jsx';
import OrderList from '../pages/OrderList.jsx';
import CategoriesMainProduct from '../pages/CategoriesMainProduct.jsx';
import GmailOTP from '../components/Profile/GmailOTP.jsx';
import ChangPassword from '../components/Profile/ChangePassword.jsx';

const Router = () => {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/" element={<Home />} />

   

      <Route path='/:nameCate/:id' element={<CategoriesMainProduct />} />

      <Route path="/product-detail/:id" element={<ProductDetail />} />

      <Route path="/check-out" element={<CheckOut />} />
      <Route path="/pay-for-order" element={<PayForOrder />} />

      <Route path="/profile" element={<InfoProfile />} />
      <Route path="/sendEmailOTP" element={<GmailOTP />} />

      {/* <Route path="/order" element={<OrderList />} /> */}
      <Route path="/success" element={<OrderSuccess />} />
      <Route path="/history" element={<OrderList />} />

      {/* ADMIN */}
      <Route path="/admin" element={<Admin />}>

        <Route index element={<Dashboard />} />
        {/* <Route path="categories" element={<AdminCategory />} /> */}

        <Route path="product" element={<AdminProduct />} />
        <Route path="product/create" element={<AdminCreate />} />
        <Route path="product/update/info" element={<AdminUpdate />} />

        {/* <Route path="customers" element={<AdminCustomer />} /> */}
        <Route path="order" element={<AdminOrder />} />
        <Route path="customer" element={<AdminUser />} />

        {/* <Route path="cate" element={<AdminCreateCate />} /> */}
        <Route path="category" element={<AdminCate />} />
        <Route path="category/create" element={<AdminCreateCate />} />



      </Route>





      <Route path="*" element={<Navigate to="/" />} />

    </Routes>

  );
};

export default Router
