import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { useState } from 'react';
// import { info } from 'node-sass';
// import { info } from 'node-sass';
const RelativeService = ({ data }) => {
    const arr = [
        {
            id: 1,
            name: 'Bọc sách',
            sub: data,
            checked: false
        },
        {
            id: 2,
            name: 'Bọc sách',
            checked: false

        },
        {
            id: 3,
            name: 'Xuất hóa đơn',
            checked: false

        }
    ]

    const [checked, setChecked] = useState([])
    const [orderBookChecked, setBookChecked] = useState([])
    const handleOnChangeCheckbox = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                // checked[id].checked = false;
                return checked.filter(item => item !== id)
            }
            else {
                // reCheckArr(id)
                // checked[id-1].checked = true;
                return [...prev, id]
            }
        })
    }
    const handleOnChangeSelectedBook = (id) => {
        setBookChecked(prev => {
            const isChecked = orderBookChecked.includes(id)
            if (isChecked) {
                // checked[id].checked = false;
                return orderBookChecked.filter(item => item !== id)
            }
            else {
                // reCheckArr(id)
                // checked[id-1].checked = true;
                return [...prev, id]
            }
        })
    }
    const handleSelectAllOrderedBook = () => {
        // setBookChecked([])
        {
            orderBookChecked.length < data.length && data.map(item => {
                setBookChecked(prev => {
                    const isChecked = orderBookChecked.includes(item.id)
                    if (!isChecked) {
                        // checked[id].checked = false;
                        return [...prev, item.id]
                        // return orderBookChecked.filter(item => item !== id)
                    }
                })
            })
        }

    }
    const handleUnselectAllOrderedBook = () => {
        setBookChecked([])
    }
    return (
        <div className='pfo-relativeservice'>
            <div className='pfo-rs-title'>VUI LÒNG CHỌN DỊCH VỤ KÈM THEO</div>
            <div className='pfo-rs-cb-group'>
                {arr.map(item => {
                    return (
                        <div key={item.id}>
                            <Checkbox
                                icon={<CircleUnchecked />}
                                checkedIcon={<CircleCheckedFilled />}
                                checked={checked.includes(item.id)}
                                onChange={() => handleOnChangeCheckbox(item.id)}
                            />
                            <label>{item.name}</label>
                            {checked.includes(item.id) && item.id === 1 &&
                                <div className='boc-sach'>
                                    <span onClick={() => handleSelectAllOrderedBook()} className='select-all'>Chọn tất cả</span>/<span onClick={() => handleUnselectAllOrderedBook()} className='unselect-all'>Bỏ chọn tất cả</span>
                                    <div>
                                        {data.map(orderedBook => {
                                            return (
                                                <div className='ordered-book-checkbox' key={orderedBook.id}>
                                                    <Checkbox
                                                        icon={<CircleUnchecked />}
                                                        checkedIcon={<CircleCheckedFilled />}
                                                        checked={orderBookChecked.includes(orderedBook.id)}
                                                        onChange={() => handleOnChangeSelectedBook(orderedBook.id)}
                                                    />
                                                    <label>{orderedBook.name}</label>

                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                            {checked.includes(item.id) && item.id === 2 &&
                                <div className='wish'>
                                    <textarea placeholder='Lời chúc' />
                                </div>
                            }
                            {checked.includes(item.id) && item.id === 3 &&
                                <div className='input-group'>
                                    <div className=' input-common input-name'>
                                        <label>Tên công ty</label>
                                        <input type="text" placeholder='Tên công ty'></input>
                                    </div>
                                    <div className='input-common input-phone'>
                                        <label>Mã số thuế</label>
                                        <input type="text" placeholder='Mã số thuế'></input>
                                    </div>
                                    <div className='input-common input-nation'>
                                        <label>Địa chỉ công ty</label>
                                        <input type="text" placeholder='Địa chỉ công ty'></input>
                                    </div>
                                </div>
                            }
                            {/* {checked[item.id].checked === true &&
                                <div>
                                    weww
                                </div>} */}
                        </div>)
                })}

            </div>
        </div >
    )
}
export default RelativeService