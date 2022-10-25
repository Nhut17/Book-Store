import React from 'react'
import { list_main_product } from '../data'
import TableBooks from './TableBooks';
const Title = () => {
    return (
        <div className='main-box-product'>
            <div className='main-box-title'>GIỎ HÀNG</div>
            <TableBooks list_product={list_main_product} />
        </div>
    )
}
export default Title