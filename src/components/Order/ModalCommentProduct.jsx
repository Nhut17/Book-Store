import React, { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
import { data } from 'jquery';
import { createComment } from '../../redux/reducer/commentSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Rating } from 'react-simple-star-rating'
const ModalCommentProduct = ({ openModalComment, setOpenModalComment, data }) => {

    const [rating, setRating] = useState(0)
    const [disableMove, setDisableMove] = useState(false)
    // const handleRating = (rate) => {
    //     setRating(rate)
    //     // Some logic
    // }
    const handleRating = (rate: number) => {
        setRating(rate)
        setDisableMove(true)
    }
    const onPointerMove = (value: number, index: number) => {
        { disableMove === false && setRating(value) }
        console.log(value, index)
    }
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const toggle = () => {
        setOpenModalComment(false)
    }
    const {
        register,
        handleSubmit
    } = useForm()
    const dispatch = useDispatch()
    const totalPrice = data.tranUnitPrice * data.tranQuantity
    const onHandleSubmit = (formData) => {
        const dataForm = {
            comContent: formData.comment,
            comRating: rating,
            productId: data.productId
        }
        console.log(data)
        dispatch(createComment(dataForm))
        toggle()
        // dispatch(addAddresses(formData))
    }

    return (
        <div className='modal-comment-product'>
            <Modal
                open={openModalComment}
                onClose={toggle}
                center
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'custom-modal-add-new-address',
                }}>
                <form onSubmit={handleSubmit(onHandleSubmit)}>

                    <div className='add-new-rating'>
                        <span className='rating-product'>Nh???n x??t s???n ph???m</span>
                        <div className='product-infor'>
                            <div className="img" style={{ backgroundImage: `url(${data.productImage})` }}>
                                <span>{data.tranQuantity}</span>
                            </div>
                            <div className="up">
                                <div className='product-name'>{data.productName}</div>
                                <div className='product-price'>{totalPrice?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}<span className='currency'>&#8363;</span></div>
                            </div>
                        </div>
                        <div className='rating'>
                            <span className='title-rating'>
                                {rating === 0 && 'Vui l??ng ????nh gi??'}
                                {rating === 1 && 'R???t kh??ng h??i l??ng'}
                                {rating === 2 && 'Kh??ng h??i l??ng'}
                                {rating === 3 && 'B??nh th?????ng'}
                                {rating === 4 && 'H??i l??ng'}
                                {rating === 5 && 'C???c k??? h??i l??ng'}
                            </span>
                            <Rating
                                // onClick={handleRating}
                                ratingValue={rating}
                                size={50}
                                label
                                transition
                                onClick={handleRating}
                                onPointerEnter={disableMove === false && onPointerEnter}
                                onPointerLeave={disableMove === false && onPointerLeave}
                                onPointerMove={disableMove === false && onPointerMove}
                                // onPointerMove={handleHoverRating}
                                fillColor='orange'
                                emptyColor='gray'
                                className='foo' // Will remove the inline style if applied
                            />
                            {/* Use rating value */}
                            {/* {rating} */}
                        </div>
                        <div className="input-group">
                            <div className='input-common'>
                                <textarea className='comment-content'
                                    type="text"
                                    placeholder='H??y chia s??? c???m nh???n c???a b???n v??? s???n ph???m nh??'
                                    {...register('comment')} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='btn-group-add-comment'>
                        <button className='btn confirm'>X??c nh???n</button>
                        <button className='btn cancel'>H???y</button>
                    </div>
                </form>
                {/*  */}
            </Modal>
        </div>
    )
}
export default ModalCommentProduct