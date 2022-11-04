
import React from 'react'
import ReceiptItem from './ReceiptItem';
import SummaryOrder from './SummaryOrder'
const TableBooks = ({ list_product }) => {
    console.log('check list product', list_product)
    return (
        <div className='list-main-product' >
            <div className='content-checkout'>
                <div className='detail-checkout'>
                    <div className='title-product'>SẢN PHẨM</div>
                    {
                        list_product.map(data => (
                            <ReceiptItem data={data}
                            />
                        ))
                    }
                </div>

                <div className='summary-content'>
                    <SummaryOrder count={3}/>
                </div>
            </div>

        </div>
    )
}
export default TableBooks