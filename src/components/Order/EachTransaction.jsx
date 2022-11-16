
import ModalCommentProduct from './ModalCommentProduct'
import { React, useState } from 'react'

const EachTransaction = ({ key, orderDetail, evaluated }) => {

    const [openModalComment, setOpenModalComment] = useState(false)
    const handleComment = () => {
        setOpenModalComment(true)
    }
    return (
        <div className='each-transaction' key={key}>
            <div className="img" style={{ backgroundImage: `url(${orderDetail.productImage})` }}>
                <span>{orderDetail.tranQuantity}</span>
            </div>
            <div className="content">
                <div className="up">
                    <span className='product-name'>{orderDetail.productName}</span>
                    <span className='product-price'>{orderDetail.tranUnitPrice * orderDetail.tranQuantity}</span>
                </div>
                <div className='down'>
                    <span className='product-author'>{orderDetail.productAuthor}</span>
                    <button
                        onClick={handleComment}
                        hidden={evaluated && evaluated === true ? false : true}
                        className={evaluated && evaluated === true ? ' btn-review-product active' : 'btn-review-product'}>Đánh giá sản phẩm</button>
                </div>
            </div>
            <ModalCommentProduct openModalComment={openModalComment} setOpenModalComment={setOpenModalComment} data={orderDetail}/>
        </div >
    )
}
export default EachTransaction