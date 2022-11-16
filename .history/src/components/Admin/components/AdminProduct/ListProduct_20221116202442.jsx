import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { editCurrentPage, paginationProduct } from '../../../../actions/ProductAction';
import Product from './Product';

function ListProduct({listProduct}) {
    

    return (
       <div className="admin-product-list">
           <table>
                <tr>
                    <th style={{width : '5%'}}>STT</th>
                    <th style={{width : '15%'}}>Hình ảnh</th>
                    <th style={{width : '10%'}}>Tên</th>
                    <th style={{width : '10%'}}>Giá</th>
                    <th>Danh mục</th>
                    <th>Tác giả</th>
                    <th>Số lượng</th>
                    <th>Giảm giá</th>
                    <th>Hàng tồn</th>

                </tr>
                {
                    listProduct.map((data,index) => (

                        <Product data={data} stt={index}/>
                    ))
                }
            </table>
            

       </div>
    );
}

export default ListProduct;