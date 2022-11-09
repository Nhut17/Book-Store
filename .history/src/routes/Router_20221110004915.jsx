import React from 'react'
import { Route, Routes  } from "react-router-dom";


import Home from '../pages/Home.jsx';
import BestSelling from '../pages/BestSelling.jsx';
import ProductDetail from '../components/ProductDetail/ProductDetail.jsx';
import CheckOut from '../pages/CheckOut.jsx';
import PayForOrder from '../pages/PayForOrder.jsx';
import InfoProfile from '../pages/InfoProfile.jsx';
import ForeignLiterature from '../pages/ForeignLiterature.jsx';
import ChildrenBook from '../pages/ChildrenBook.jsx';
// import  CheckOut from 
const Router = () => {
  return (
    <Routes>

      {/* HOME */}
      <Route path="/"  element={<Home />} />

      <Route path="/sach-ban-chay/:id"  element={<BestSelling />} />
      <Route path="/sach-ngoai-van/:id"  element={<ForeignLiterature />} />
      <Route path="/sach-thieu-nhi/:id"  element={<ChildrenBook />} />
      <Route path="/sach-thieu-nhi/:id"  element={<Block />} />

      <Route path="/product-detail/:id"  element={<ProductDetail  />} />

      <Route path="/check-out"  element={<CheckOut />} />
      <Route path="/pay-for-order"  element={<PayForOrder />} />

      <Route path="/profile"  element={<InfoProfile />} />

    </Routes>

  );
};

export default Router
