import React from 'react'
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';
import { data } from 'jquery';
import { createComment } from '../../redux/reducer/commentSlice'
import { useDispatch, useSelector } from 'react-redux'

const ModalCommentProduct = ({ openModalComment, setOpenModalComment, data }) => {


    const toggle = () => {
        setOpenModalComment(false)
    }
    const {
        register,
        handleSubmit
    } = useForm()
    const dispatch = useDispatch()

    const onHandleSubmit = (formData) => {
        const dataForm = {
            comContent: formData.comment,
            comRating: 5,
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
                    <div className='add-new-address'>
                        <span className='delivery-address'>Nhận xét sản phẩm</span>
                        <div className="input-group">
                            <div className='input-common'>
                                <label>Bình luận của bạn về sản phẩm</label>
                                <textarea
                                    type="text"
                                    placeholder='Bình luận của bạn'
                                    {...register('comment')} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='btn-group-add-address'>
                        <button className='btn confirm'>Xác nhận</button>
                        <button className='btn cancel'>Hủy</button>
                    </div>
                </form>
                {/*  */}
            </Modal>
        </div>
    )
}
export default ModalCommentProduct