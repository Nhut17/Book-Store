import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useState } from 'react';
import { array } from 'yup/lib/locale';
const PaymentInfor = () => {
    const arr = [
        {
            id: 1,
            name: 'Thanh toán bằng tiền mặt khi nhận hàng',
            checked: false
        },
        {
            id: 2,
            name: 'Thanh toán bằng quét mã VNPay',
            checked: false

        }
    ]
    const [checked, setChecked] = useState()
    // const handleOnChangeSelectPayment = (id) => {
    //     setChecked(prev => {
    //         const isChecked = checked.includes(id)
    //         if (isChecked) {
    //             // checked[id].checked = false;
    //             return checked.filter(item => item !== id)
    //         }
    //         else {
    //             // reCheckArr(id)
    //             // checked[id-1].checked = true;
    //             return [...prev, id]
    //         }
    //     })
    // }
    return (
        <div className='content-payment-infor'>
            <div className='title'>
                Hình thức thanh toán
            </div>
            {arr.map(item => {
                return (
                    <div key={item.id}>
                        <Checkbox
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            checked={checked === item.id}
                            onChange={() => setChecked(item.id)}
                        />
                        <label>{item.name}</label>
                        {checked === item.id && item.id === 1 &&
                            <div className='detailed-infor'>
                                <div className='header'>
                                    Nhân viên Giao hàng của Vinabook hoặc Bưu điện sẽ thu tiền mặt khi giao hàng cho Quý khách.
                                </div>
                                <div>
                                    Trong trường hợp Quý khách nhờ người nhận giúp, vui lòng thông báo số tiền thanh toán cho người nhà.
                                </div>
                            </div>
                        }
                        {checked === item.id && item.id ===  2 &&
                            <div className='detailed-infor'>
                                <div>
                                    Thanh toán bằng thẻ ATM do các ngân hàng sau phát hành và được ưu tiên xử lý đơn hàng trước (miễn phí phí thanh toán qua thẻ)
                                </div>
                                <div>
                                    <span className='warning'>Lưu ý </span>
                                    thẻ ATM hoặc tài khoản của bạn phải đăng ký dịch vụ Internet Banking với ngân hàng mới sử dụng được hình thức thanh toán này
                                </div>

                                <img src='https://play-lh.googleusercontent.com/jjp2E1WZrnx_l7rTI9zebazVt2wk_7OkZKcqwFE5k9_87QcJce8_zriAurvCbYQSqXJ7' />
                                <div>
                                    Trong trường hợp đã ngân hàng đã trừ tiền vào tài khoản nhưng giao dịch vẫn chưa thành công, vui lòng liên hệ hotro@vinabook.com hoặc Hotline 1900 6401 để được hỗ trợ.
                                </div>


                            </div>
                        }
                    </div>
                )
            })}

        </div>
    )
}
export default PaymentInfor