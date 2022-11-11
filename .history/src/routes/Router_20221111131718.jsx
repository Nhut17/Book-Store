import React from 'react'
import { Route, Routes  } from "react-router-dom";


import Home from '../pages/Home.jsx';
import BestSelling from '../pages/BestSelling.jsx';
import ProductDetail from '../components/ProductDetail/ProductDetail.jsx';
import CheckOut from '../pages/CheckOut.jsx';
import PayForOrder from '../pages/PayForOrder.jsx';
import InfoProfile from '../pages/InfoProfile.jsx';
import ForeignLiterature from '../pages/ForeignLiterature.jsx';

import OrderList from '../pages/OrderList.jsx';
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
// import  CheckOut from 
const Router = () => {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/"  element={<Home />} />

      <Route path="/sach-ban-chay/:id"  element={<BestSelling />} />
      <Route path="/sach-ngoai-van/:id"  element={<ForeignLiterature />} />
      <Route path="/sach-thieu-nhi/:id"  element={<ChildrenBook />} />
      <Route path="/sach-blockchain/:id"  element={<BlockChainBook />} />

      <Route path="/product-detail/:id"  element={<ProductDetail  />} />

      <Route path="/check-out"  element={<CheckOut />} />
      <Route path="/pay-for-order"  element={<PayForOrder />} />

      <Route path="/profile"  element={<InfoProfile />} />
      <Route path="/order"  element={<OrderList />} />

      <Route path='/admin' exact component={Admin} />



      <Route path='/admin/'  element={<Dashboard />}/>

      <Route path='/admin/product/create' element={AdminCreate}/>
      <Route path='/admin/product/update/info' element={DataFilterProduct}/>
      <Route path='/admin/product/update/:id' element={AdminUpdate}/>
      <Route path='/admin/product/reviewProduct/:id' element={ReviewProduct}/>
      <Route path='/admin/product/' element={AdminProduct}/>

      <Route path='/admin/order' element={AdminOrder}/>



    </Routes>

  );
};

export default Router
